#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# PROD DIR
RAWDATA_DIR="${TOP_DIR}/raw_data/"
# TESTING
#RAWDATA_DIR="${TOP_DIR}/foo/"

echo "images will be examined from ${RAWDATA_DIR}"




# to many files to do it this way
#FILES=eval "$(ls ${RAWDATA_DIR}/*.jpg)"
#

# 
# For testing copy 10 files to TOPDIR/foo
#find ../raw_data/ -name "*.jpg"  -print0 | head -z -n 10 | xargs --no-run-if-empty -0 cp --target-directory=.


# build hash table.  Dupe filenames for a particular key are separated with semicolon
declare -A hashes
for filename in ${RAWDATA_DIR}/*.jpg; do
    #echo $filename
    THE_HASH="$(md5sum ${filename} | cut -d ' ' -f 1)"
    #echo $THE_HASH


    if [ "${#hashes[${THE_HASH}]}" -ne 0 ]; then
        #echo "array is not empty"
        hashes[${THE_HASH}]+=';'
        hashes[${THE_HASH}]+=${filename}
    else
        #echo "array is empty"
        hashes[${THE_HASH}]=${filename}
    fi


    # append filename to hash entry
    #hashes[${THE_HASH}]=${filename}

done

# dump the hash table
for a_hash_key in "${!hashes[@]}"; do
    #echo "$a_hash_key "
    #echo "$a_hash_key : ${hashes[$a_hash_key]}";
    IFS=';' tokens=( ${hashes[$a_hash_key]} )
    # dump all strings for a particular key
    #echo ${tokens[*]}
    # just dump first one
    #echo ${tokens[0]}
    # dump all but first
    #echo ${tokens[@]:1}
    # rm any which are more than first
    rm -f ${tokens[@]:1}
done









