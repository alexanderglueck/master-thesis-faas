#!/bin/bash

# Troubleshooting
# Kind doesnt start https://github.com/kubernetes-sigs/kind/issues/3174#issuecomment-1832932315 (manually start container from image)

# Create Kind cluster
kind create cluster --config=./config/kind.yaml

# Add fission repo to helm
if helm repo list | grep -q fission-charts; then
    echo "Helm repository fission-charts is already added."
else
    helm repo add fission-charts https://fission.github.io/fission-charts/
fi

if helm repo list | grep -q metallb; then
    echo "Helm repository metallb is already added."
else
    helm repo add metallb https://metallb.github.io/metallb
fi

# Update helm repositories
helm repo update

# Export variables
echo 'export FISSION_NAMESPACE="fission"' >> /root/.profile
export FISSION_NAMESPACE="fission"


# Create fission namespace
kubectl create namespace $FISSION_NAMESPACE
kubectl create -k "github.com/fission/fission/crds/v1?ref=v1.20.1"


# Here is where I could switch fission to use LoadBalancer
# Deploy fission with helm
helm upgrade --install --version v1.20.1 --namespace $FISSION_NAMESPACE fission \
  --set serviceType=NodePort,routerServiceType=LoadBalancer \
  fission-charts/fission-all
  
# Install fission CLI
curl -Lo fission https://github.com/fission/fission/releases/download/v1.20.1/fission-v1.20.1-linux-amd64 \
    && chmod +x fission && sudo mv fission /usr/local/bin/

# Define function to wait until metallb is ready
check_metallb() {
    local running_pods=$(kubectl get pods -n default --field-selector=status.phase=Running | grep metallb-controller | wc -l)
 
    if [ "$running_pods" -gt 0 ]; then
        echo "MetalLB is running."
        kubectl apply -f ./config/metallb-values.yaml
    else
        echo "MetalLB is not running. Trying again in 30 seconds..."
        sleep 30
        check_metallb
    fi
}


# Deploy metallb Load Balancer
helm upgrade --install metallb metallb/metallb

check_metallb

# Verify installation
fission version

fission check

# Create function
# Add the stock NodeJS env to your Fission deployment
fission env create --name nodejs --image fission/node-env

# A javascript function that prints "hello world"
curl -LO https://raw.githubusercontent.com/fission/examples/main/nodejs/hello.js

# Upload your function code to fission
fission function create --name hello-js --env nodejs --code hello.js

# Test your function.  This takes about 100msec the first time.
fission function test --name hello-js

# Create a HTTP trigger
fission httptrigger create --url /hello --method GET --function hello-js

# View installed triggers
fission route list

# Function should now be accessible via CLI in WSL

kubectl --namespace fission port-forward $(kubectl --namespace fission get pod -l svc=router -o name) 8080:8888 &
