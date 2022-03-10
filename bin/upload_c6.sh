#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# SRC DIR
#RAWDATA_DIR="${TOP_DIR}/raw_data/"
#echo "images will be examined from ${RAWDATA_DIR}"
ICYBRIDGE_DIR="${TOP_DIR}/icy-bridge/"
SRC_DIR="${ICYBRIDGE_DIR}/c6/"


aws s3 sync ${SRC_DIR}/. s3://icy-bridge/c6/ --exclude "*.swp" --exclude "*.key"









