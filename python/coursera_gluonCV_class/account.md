# account notes

### erlkonig aws cli for second account

This is for using a docker container of the AWS Deep Learning

Create user notes

1.  click services->IAM
2.  click users
3.  click add user.
4.  Enable progrmmatic access in Select AWS Access type.
5.  click next to set permissions
6. Select "Attach existing policies directly"
7. search for containerregistry
8.  select AmazonEC2ContainerRegistryFullAccess
9.  skip tabs and create user.  Save the info on the next screen.  This is the only time you can get this info.

# To use the sagemaker notebook instance

Use this info with the aws command like so:

Run `aws configure` and provide this info

```
aws configure
AWS Access Key ID [None]: XXXXXXXXXXXXXXXXXXXX
AWS Secret Access Key [None]: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Default region name [None]: us-east-1
Default output format [None]:
```

Then use this command to run the docker

```
$(aws ecr get-login --region us-east-1 --no-include-email --registry-ids XXXXXXXXXXXX)
```

after that run docker
```
docker run -it XXXXXXXXXXXX.dkr.ecr.us-east-1.amazonaws.com/mxnet-training:1.4.1-cpu-py36-ubuntu16.04
```

After that it provides a login prompt.  Now clone a repo from the mxnet examples

```
git clone -b v1.4.x https://github.com/apache/incubator-mxnet.git
```

Then run the sample

```
python ./incubator-mxnet/example/image-classification/train_mnist.py
```


