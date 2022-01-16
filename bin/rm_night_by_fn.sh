#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# PROD DIR
RAWDATA_DIR="${TOP_DIR}/raw_data/"
# TESTING
#RAWDATA_DIR="${TOP_DIR}/foo/"

echo "images will be examined from ${RAWDATA_DIR}"




# to many files to do it this way
FILES=eval "$(ls ${RAWDATA_DIR}/*Z04*.jpg)"
#

# 
# For testing copy 10 files to TOPDIR/foo
#find ../raw_data/ -name "*.jpg"  -print0 | head -z -n 10 | xargs --no-run-if-empty -0 cp --target-directory=.


# rm any at 2am-4am
for filename in ${RAWDATA_DIR}/*Z0[234]*.jpg; do
    echo $filename
    rm $filename
done









