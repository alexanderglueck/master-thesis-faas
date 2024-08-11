#!/bin/sh

service docker start
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$(go env GOPATH)/bin


# optional
kind delete cluster

# fix for failing kind cluster creation
docker pull kindest/node:v1.29.2
docker run -it --privileged --name kind-control-plane kindest/node:v1.29.2

# in another window
docker stop kind-control-plane
docker rm kind-control-plane

# retry cluster creation
