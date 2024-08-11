#!/bin/bash

# Troubleshooting
# Kind doesnt start https://github.com/kubernetes-sigs/kind/issues/3174#issuecomment-1832932315 (manually start container from image)

# Create Kind cluster
kind create cluster --config=./config/kind.yaml

# Add openfaas repo to helm
if helm repo list | grep -q openfaas; then
    echo "Helm repository openfaas is already added."
else
    helm repo add openfaas https://openfaas.github.io/faas-netes/
fi

if helm repo list | grep -q metallb; then
    echo "Helm repository metallb is already added."
else
    helm repo add metallb https://metallb.github.io/metallb
fi

# Update helm repositories
helm repo update

# Create openfaas namespace
kubectl create namespace openfaas

# Create openfaas namespace for functions
kubectl create namespace openfaas-fn

# Deploy openfaas with helm
helm upgrade --install openfaas openfaas/openfaas \
    --namespace openfaas \
    --set serviceType=LoadBalancer \
    -f ./config/openFaas-values.yaml

# Verify installation
kubectl -n openfaas get deployments -l "release=openfaas, app=openfaas"

# Retrieve openfaas credentials
PASSWORD=$(kubectl -n openfaas get secret basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode) && \
  echo "OpenFaaS admin password: $PASSWORD"

# Install faas-cli
curl -sSL https://cli.openfaas.com | sudo -E sh

# Forward gateway for PC host
kubectl port-forward -n openfaas svc/gateway 80:8080 &
# Forward gateway for CLI in Ubuntu
kubectl port-forward -n openfaas svc/gateway 8080:8080 &


# Log into faas-cli
echo -n $PASSWORD | faas-cli login --username admin --password-stdin


