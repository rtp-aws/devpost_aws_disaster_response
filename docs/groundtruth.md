# SageMaker Ground Truth

## URLS of interest
[intro](https://www.youtube.com/watch?v=_FPI6KjDlCI)


## source data

```
s3://icy-bridge-dataset/raw_data_20220119/raw_data/
```

## ground truth job portal

```
https://lflxlkdl3x.labeling.us-east-1.sagemaker.aws/
```

## setup method for creating resources for labeling job

### S3

1. Create a bucket
2. Add photos to bucket

### Workforce portal

1. In left-sidebar, navigate to Sagemaker->Ground Truth -> Labeling Workforces
2. Navigate to Private Tab and create private team
3. Create a private team with AWS Cognito
4. Name team
5. Invite new workers by email
6. Add my own email to invitation and contact email
7. Click create

1. Click the private team
2. click the workers tab - my email is there

### Create a labeling job


1. In left-sidebar, navigate to Sagemaker->Ground Truth -> Labeling jobs
2. Click Create labeling job
3. Provide a name
4. Specify Automated data setup
5. For S3 use the raw-data bucket above

When I did this, it did not see any objects.  I believe it was because I had data in folders.  I moved the data to top level of the bucket.  Afterwards, I could not see them still.
I logged in with administrator user to adjust permission on my devpost user.  I did not have any roles for S3 for this user.

In an attempt at winging it, I added `AmazonS3FullAccess`.  Odd, since I used this userid to create the buckets.

It turns out this wsa not the fix either.  I never had to logout, but I did have to create the workforce pool and the job in the same region as the bucket.

6\. Use the same location as input bucket for labeling job.
7\. For datatype specify image.
8\. for IAM role, click to specify create a new role.  Before I did that, I looked at the roles for devpost user perms and It did not have "AmazonSageMakerFullAccess".  Odd, I thought I made this role previously.  
9\. In the Create an IAM role dialog, specify S3 Buckets-Any S3 bucket.
10\. Click complete data setup


###Afterwards, if you go back to S3 bucket, it will have a dataset-xxx.manifest file 

Select Image Classification.  This is the daylight versus night time job.

Select workers and configure tool.  Select workers as private.  Select the private team I made earlier. Select Enable automated data labeling.





