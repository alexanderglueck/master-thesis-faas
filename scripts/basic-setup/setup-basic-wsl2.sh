#!/bin/sh

# Keep server up to date
apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y
apt autoremove -y

# Install Docker
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install Docker Engine
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Start docker service (not running automatically on WSL)
service docker start

# Verify Docker setup
sudo docker run hello-world


# Install git
apt-get install -y git wget vim

# Install go (required for kind)
wget https://go.dev/dl/go1.22.3.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.22.3.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> /root/.profile

# Set path manually
export PATH=$PATH:/usr/local/go/bin

# Install kind
go install sigs.k8s.io/kind@v0.22.0
echo 'export PATH=$PATH:$(go env GOPATH)/bin' >> /root/.profile

# Set path manually
export PATH=$PATH:$(go env GOPATH)/bin


# Install helm
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
rm get_helm.sh

# Install k9s
mkdir -p /root/k9s && cd /root/k9s
wget https://github.com/derailed/k9s/releases/download/v0.32.3/k9s_Linux_amd64.tar.gz
tar -xzf k9s_Linux_amd64.tar.gz
mv k9s /usr/local/bin/k9s
cd ..
rm -rf /root/k9s

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm kubectl


# Ready for clusters

