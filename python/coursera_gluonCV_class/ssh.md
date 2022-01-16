# ssh notes
my small deep learning instance

```
ec2-XX-XXX-X-XX.compute-1.amazonaws.com
```

## Script 1

```
chmod 400 KEYPAIR.pem

export JUMPHOST=XX.XXX.XX.XXX
export EMRDNS=ec2-X-XX-XX-3X.compute-1.amazonaws.com

ssh -i KEYPAIR.pem -Ao "ProxyCommand ssh -W %h:%p -i KEYPAIR.pem ec2-user@${JUMPHOST}" hadoop@${EMRDNS}
```

## Script 2

```
chmod 400 XXXXXXXX-XXXXX-XXXXXXXX.pem

ssh -i XXXXXXXX-XXXXX-XXXXXXXX.pem ec2-user@XX.XXX.XXX.XXX
```


## Script I created

This script is the actual one I used for connecting to the AWS Deep Learning AMI with port
forwarding for jupyter notebooks.

```
#!/bin/bash

PEM_FILE=XXX-XXX-coursera.pem
HOST_PUBLIC_DNS_NAME=ec2-XX-XXX-X-XX.compute-1.amazonaws.com

chmod 400 $PEM_FILE

# normal ec2-users use this USERID
#ssh -i "${PEM_FILE}" ec2-user@${HOST_PUBLIC_DNS_NAME}


# this "AWS Deep Learning" AMI uses this USERID
#ssh -i "${PEM_FILE}" ubuntu@${HOST_PUBLIC_DNS_NAME}


# this "AWS Deep Learning" AMI uses this USERID
# This adds the ability to port forward for jupyter notebooks
ssh -i "${PEM_FILE}" -L localhost:8888:localhost:8888 ubuntu@${HOST_PUBLIC_DNS_NAME}
```

