#!/bin/bash

# Troubleshooting
# Kind doesnt start https://github.com/kubernetes-sigs/kind/issues/3174#issuecomment-1832932315 (manually start container from image)

# Create Kind cluster
kind create cluster --config=./config/kind.yaml

# Add nuclio repo to helm
if helm repo list | grep -q nuclio; then
    echo "Helm repository nuclio is already added."
else
    helm repo add nuclio https://nuclio.github.io/nuclio/charts
fi

if helm repo list | grep -q metallb; then
    echo "Helm repository metallb is already added."
else
    helm repo add metallb https://metallb.github.io/metallb
fi

# Update helm repositories
helm repo update

# Install nuclio (Kubernetes Version)
# Nuclio CLI
wget https://github.com/nuclio/nuclio/releases/download/1.13.2/nuctl-1.13.2-linux-amd64
mv nuctl-1.13.2-linux-amd64 /usr/local/bin/nuctl
chmod +x /usr/local/bin/nuctl


# Create Kind namespace
kubectl create namespace nuclio

# Configure Docker registry credentials
read -s mypassword # <enter your password> (pw: docker hub CLI token, not the actual password)

kubectl --namespace nuclio create secret docker-registry registry-credentials \
    --docker-username your_username_here \
    --docker-password $mypassword \
    --docker-server registry.hub.docker.com  \
    --docker-email your_email_address_here

unset mypassword

# Deploy nuclio with helm
helm upgrade --install nuclio --namespace nuclio \
  --set registry.secretName=registry-credentials \
  --set dashboard.containerBuilderKind=kaniko \
  --set registry.pushPullUrl=registry.hub.docker.com \
  nuclio/nuclio

# Port forward dashboard
kubectl -n nuclio port-forward $(kubectl get pods -n nuclio -l nuclio.io/app=dashboard -o jsonpath='{.items[0].metadata.name}') 8070:8070 &


# Verify functionality
kubectl --namespace nuclio get pods

# Open localhost:8070 after port-forwarding

# Create function in dashboard
# Change image name to include the docker hub username
# e.g. your_username_here/hello-2

# Check functions
nuctl get functions -n nuclio


# Configure ingress controller


if helm repo list | grep -q traefik; then
    echo "Helm repository traefik is already added."
else
    helm repo add traefik https://traefik.github.io/charts
fi


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

helm upgrade --install metallb metallb/metallb

check_metallb


# port-forward deployed function
# function has to be nodeport (?)
kubectl port-forward svc/nuclio-nuclio-moment -n nuclio 8080:8080
