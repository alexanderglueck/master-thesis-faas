#!/bin/bash

# Troubleshooting
# Kind doesnt start https://github.com/kubernetes-sigs/kind/issues/3174#issuecomment-1832932315 (manually start container from image)

# Create Kind cluster
kind create cluster --config=./config/kind.yaml

# Add openwhisk repo to helm
if helm repo list | grep -q openwhisk; then
    echo "Helm repository openwhisk is already added."
else
    helm repo add openwhisk https://openwhisk.apache.org/charts
fi

if helm repo list | grep -q metallb; then
    echo "Helm repository metallb is already added."
else
    helm repo add metallb https://metallb.github.io/metallb
fi

# Update helm repositories
helm repo update

# Deploy openwhisk with helm
helm upgrade --install owdev openwhisk/openwhisk -n openwhisk --create-namespace -f ./config/mycluster.yaml

# Install openwhisk CLI
mkdir wsk
cd wsk
wget https://github.com/apache/openwhisk-cli/releases/download/1.2.0/OpenWhisk_CLI-1.2.0-linux-amd64.tgz
tar -xzf OpenWhisk_CLI-1.2.0-linux-amd64.tgz
mv wsk /usr/local/bin/wsk
cd ..
rm -r wsk/

# Configure openwhisk CLI
wsk property set --apihost localhost:31001
wsk property set --auth 23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP # hardcoded password from the docs

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
helm test owdev -n openwhisk

wsk list -v -i

# Create function
cat > hello.js << 'EOF'
function main(args) {
    const name = args && args.name || "stranger";
    return { greeting: "Hello " + name + "!" };
}
EOF

# Add function
wsk -i action create helloJS hello.js

# Invoke function
wsk -i action invoke helloJS --result --param name World

# Create web function
cat > web-hello.js << 'EOF'
function main({name}) {
  var msg = 'you did not tell me who you are.';
  if (name) {
    msg = `hello ${name}!`
  }
  return {body: `<html><body><h3>${msg}</h3></body></html>`}
}
EOF

# Create package
wsk -i package create demo

# Create http trigger
wsk -i action create /guest/demo/hello web-hello.js --web true

# Retrive trigger url
wsk -i action get /guest/demo/hello --url

curl https://localhost:31001/api/v1/web/guest/demo/hello

curl https://localhost:31001/api/v1/web/guest/demo/hello?name=example

# Function should now be accessible via CLI in WSL

# Add port forwarding

kubectl port-forward svc/owdev-nginx -n openwhisk 8080:80
