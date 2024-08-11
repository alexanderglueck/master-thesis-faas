#!/bin/bash

# Troubleshooting
# Kind doesnt start https://github.com/kubernetes-sigs/kind/issues/3174#issuecomment-1832932315 (manually start container from image)

# Install cosign
go install github.com/sigstore/cosign/v2/cmd/cosign@latest

# Install jq
apt install -y jq

# Verify signatures
curl -sSL https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-core.yaml \
  | grep 'gcr.io/' | awk '{print $2}' | sort | uniq \
  | xargs -n 1 \
    cosign verify -o text \
      --certificate-identity=signer@knative-releases.iam.gserviceaccount.com \
      --certificate-oidc-issuer=https://accounts.google.com

# Create Kind cluster
kind create cluster
# --config=./config/kind.yaml

# Install knative serving components
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-crds.yaml

kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-core.yaml

# Install networking layer
kubectl apply -f https://github.com/knative/net-kourier/releases/download/knative-v1.14.0/kourier.yaml

# Configure kourier
kubectl patch configmap/config-network \
  --namespace knative-serving \
  --type merge \
  --patch '{"data":{"ingress-class":"kourier.ingress.networking.knative.dev"}}'

# metallb
# Inspect network for public ip
docker network inspect kind

# Configure metallb (ip from before)

# Add metallb helm chart
if helm repo list | grep -q metallb; then
    echo "Helm repository metallb is already added."
else
    helm repo add metallb https://metallb.github.io/metallb
fi

# Update helm repositories
helm repo update

# Deploy metallb Load Balancer
helm upgrade --install metallb metallb/metallb

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

check_metallb

# https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml/#verify-the-installation


# Check external IP address
kubectl --namespace kourier-system get service kourier

# Configure DNS
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-default-domain.yaml


# knative eventing
kubectl apply -f https://github.com/knative/eventing/releases/download/knative-v1.14.1/eventing-crds.yaml

kubectl apply -f https://github.com/knative/eventing/releases/download/knative-v1.14.1/eventing-core.yaml

# Install kn CLI
wget https://github.com/knative/client/releases/download/knative-v1.14.0/kn-linux-amd64
chmod +x kn-linux-amd64
mv kn-linux-amd64 /usr/local/bin/kn

# Install kn func CLI plugin
wget https://github.com/knative/func/releases/download/knative-v1.14.0/func_linux_amd64
chmod +x func_linux_amd64
mv func_linux_amd64 /usr/local/bin/kn-func


# Create test function
kn func create -l node nodeinfo
cd nodeinfo
# kn func run (registry=docker.io/your_username_here
# sign in with username and docker access token (not password)
kn func deploy --registry <registry>
curl http://nodeinfo.default.172.18.0.100.sslip.io


# forward the requests to kourier
kubectl port-forward svc/kourier -n kourier-system 80:80

# call function with a fake host header set to the sslip host
