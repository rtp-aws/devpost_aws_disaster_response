#!/bin/bash

PEM_FILE=aws-xxx-coursera.pem
HOST_PUBLIC_DNS_NAME=ec2-XX-XXX-X-XX.compute-1.amazonaws.com

chmod 400 $PEM_FILE

# normal ec2-users use this USERID
#ssh -i "${PEM_FILE}" ec2-user@${HOST_PUBLIC_DNS_NAME}


# this "AWS Deep Learning" AMI uses this USERID
#ssh -i "${PEM_FILE}" ubuntu@${HOST_PUBLIC_DNS_NAME}


# this "AWS Deep Learning" AMI uses this USERID
# This adds the ability to port forward for jupyter notebooks
ssh -i "${PEM_FILE}" -L localhost:8888:localhost:8888 ubuntu@${HOST_PUBLIC_DNS_NAME}


