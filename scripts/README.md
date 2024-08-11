This directory contains the basic server setup that all platforms use as their basis (basic-setup).
The other directories belong to their respective platform. 

The `basic-setup/startup.sh` file contains commands that have to be entered every time the WSL-based system is restarted. 
It also includes a workaround for a bug preventing a fresh cluster from being created after being restarted. 

The setup for each directory is the same, each director contains a `deploy.sh` and a `destroy.sh` file. 
The "destroy file" can be used to remove/kill the cluster while the "deploy file" is responsible for setting up the 
system. 

Notice: The `deploy.sh` file can not be run. Each command has to be executed one after the other while waiting for the 
currently running process to finish. Some of the platforms take a while until the cluster is ready, so be patient. 
