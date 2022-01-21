#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# PROD DIR
RAWDATA_DIR="${TOP_DIR}/raw_data/"
# TESTING
#RAWDATA_DIR="${TOP_DIR}/foo/"

#echo "images will be examined from ${RAWDATA_DIR}"




shuf -ezn 10 ${RAWDATA_DIR}/* | xargs -0 -n1 echo 









