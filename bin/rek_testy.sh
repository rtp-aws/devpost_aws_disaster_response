#!/usr/bin/bash

TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# PROD DIR
#RAWDATA_DIR="${TOP_DIR}/raw_data/"
# TESTING
RAWDATA_DIR="${TOP_DIR}/foo/"

# S3 Folder
BUCKET="icy-bridge"
FOLDER="samples"

# This file shows a partial bridge and the road below.
# There are a couple of cars in the photo
FILE="BUS40_MACY_20220115Z1655.jpg"
FILE_PATH="${RAWDATA_DIR}/${FILE}"
echo "using ${FILE}"

# Get help
#aws rekognition detect-labels help

# view a file
#open ${FILE}

# detect on a local file
#aws rekognition detect-labels --image-bytes fileb://${FILE}

# copy file to s3
# aws s3 cp ${FILE} s3://${BUCKET}/${FOLDER}/


# detect on file in S3
NAME=${FOLDER}/${FILE}
echo ${NAME}


#jq -nc --arg NAME "$NAME" '{Name:$NAME}' ;
#jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{Bucket: $BUCKET, Name:$NAME}' ;
#jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{S3Object: {Bucket: $BUCKET, Name:$NAME}}' ;
S3_JSON=$(jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{S3Object: {Bucket: $BUCKET, Name:$NAME}}')
#echo $S3_JSON

aws rekognition detect-labels --image ${S3_JSON}






