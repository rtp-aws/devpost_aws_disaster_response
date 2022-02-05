#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
# SRC DIR
#RAWDATA_DIR="${TOP_DIR}/raw_data/"
#echo "images will be examined from ${RAWDATA_DIR}"
ICYBRIDGE_DIR="${TOP_DIR}/icy-bridge/"
DEST_DIR="${ICYBRIDGE_DIR}/c3/"

SRC_DIR_1="${TOP_DIR}/icy-bridge/m10_BUS40_SALEM_20220115/"
SRC_DIR_2="${TOP_DIR}/icy-bridge/m10_BUS40_SALEM_20220116/"
SRC_DIR_3="${TOP_DIR}/icy-bridge/m10_BUS40_SALEM_20220121/"
SRC_DIR_4="${TOP_DIR}/icy-bridge/m10_BUS40_SALEM_20220122/"


SRC_DIR_5="${TOP_DIR}/icy-bridge/m10_I540_US401_20220115/"
SRC_DIR_6="${TOP_DIR}/icy-bridge/m10_I540_US401_20220116/"
SRC_DIR_7="${TOP_DIR}/icy-bridge/m10_I540_US401_20220121/"
SRC_DIR_8="${TOP_DIR}/icy-bridge/m10_I540_US401_20220122/"


SRC_DIR_9="${TOP_DIR}/icy-bridge/m10_TOLL54_APEXBBQ_20220115/"
SRC_DIR_10="${TOP_DIR}/icy-bridge/m10_TOLL54_APEXBBQ_20220116/"
SRC_DIR_11="${TOP_DIR}/icy-bridge/m10_TOLL54_APEXBBQ_20220121/"
SRC_DIR_12="${TOP_DIR}/icy-bridge/m10_TOLL54_APEXBBQ_20220122/"


SRC_DIR_13="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220115/"
SRC_DIR_14="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220116/"
SRC_DIR_15="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220121/"
SRC_DIR_16="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220122/"

SRC_DIR_17="${TOP_DIR}/icy-bridge/m10_TOLL147_HOPSON_RD_20220115/"
SRC_DIR_18="${TOP_DIR}/icy-bridge/m10_TOLL147_HOPSON_RD_20220116/"
SRC_DIR_19="${TOP_DIR}/icy-bridge/m10_TOLL147_HOPSON_RD_20220121/"
SRC_DIR_20="${TOP_DIR}/icy-bridge/m10_TOLL147_HOPSON_RD_20220122/"

# These are missing
#SRC_DIR_1="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220115/"
#SRC_DIR_2="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220116/"
SRC_DIR_21="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220121/"
SRC_DIR_22="${TOP_DIR}/icy-bridge/m10_TOLL147_DAVIS_DR_20220122/"



shuf -ezn 3 ${SRC_DIR_1}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_2}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_3}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_4}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_5}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_6}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_7}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_8}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_9}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_10}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_11}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_12}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_13}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_14}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_15}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_16}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_17}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_18}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_19}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_20}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_21}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.
shuf -ezn 3 ${SRC_DIR_22}/* | xargs -0 -n1 -I{} cp -u {} ${DEST_DIR}/.









