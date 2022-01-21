#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# PROD DIR
RAWDATA_DIR="${TOP_DIR}/raw_data/"
# TESTING
#RAWDATA_DIR="${TOP_DIR}/foo/"

#echo "images will be examined from ${RAWDATA_DIR}"


#
# copy from raw_data to foo dir
#

# -I{} says to use results from xargs output to be first param of cp command
# -u says only copy if newer
shuf -ezn 10 ${RAWDATA_DIR}/* | xargs -0 -n1 -I{} cp -u {} ${TOP_DIR}/foo/.

#
# upload from foo dir to pick10 dir
#
aws s3 sync ${TOP_DIR}/foo/. s3://icy-bridge/pick10_20220119_01/ --exclude "*.swp" --exclude "*.key"









