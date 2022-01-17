# Account notes

This is how to setup accounts for use this repo

## Create a devpost user

Login as root for the account

1.  Click services->IAM
2.  Click users
3.  Click add user.
4.  Specify name as devpost-<name>
4.  Enable progrmmatic access in Select AWS Access type.
5.  Click next to set permissions
6.  Select "Attach existing policies directly"


*I'm* not sure if all of these are needed.  I don't know...

Add user account for sagemaker

1.  Search for containerregistry
2.  Select AmazonEC2ContainerRegistryFullAccess

Add user account for Rekognition


1.  Search for reko
2.  Select AmazonRekognitionFullAccess


Add tags

Specify email:<email for user name>



9.  create user.  Save the info on the next screen.  This is the only time you can get this info.

