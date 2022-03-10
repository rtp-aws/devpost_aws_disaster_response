#!/usr/bin/bash

TOP_DIR=~/progs/devpost_aws_disaster_response
PYTHON_SRC_DIR=${TOP_DIR}/python
ICY_BRIDGE_DIR=${TOP_DIR}/icy-bridge
MODEL_DIR=${ICY_BRIDGE_DIR}/c6
RAW_DIR=${MODEL_DIR}/raw


filenames=$(basename -a $(ls ${RAW_DIR}/*.jpg))

#for filename in ${RAW_DIR}/*.jpg; do
for filename in ${filenames}; do
    #echo $filename
    python ${PYTHON_SRC_DIR}/gray_rotate2.py ${filename}
done

