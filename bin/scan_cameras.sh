#!/usr/bin/bash




# simple config
TOP_DIR="/home/davis/progs/devpost_aws_disaster_recovery/"
RAWDATA_DIR="${TOP_DIR}/raw_data/"



# get date
the_date=`date +%Y%m%dZ%H%m`
echo ${the_date}

# hashmap 
# camera_names :  URLS
# REF: https://stackoverflow.com/questions/1494178/how-to-define-hash-tables-in-bash
declare -A cams
#       [""]="" \
cams=( ["NC147_DAVIS_DR"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG&t=1642084415791" \
       ["I440_US64_Bypass"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG&t=1642081402751" \
       ["I540_US401"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG&t=1642082230568" \
       ["I540_US1"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg&t=1642094997214" \
       ["TOLL540_NC54"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC54.JPG&t=1642082877653" \
       ["TOLL54_APEXBBQ"]="https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG&t=1642095317555")

# get images based upon hash and save with timestamp

for a_camname_key in "${!cams[@]}"; do
    echo "$a_camname_key : ${cams[$a_camname_key]}";
    a_filename_root=$a_camname_key
    a_url=${cams[$a_camname_key]}


    # this is one bring string.
    # TODO: break it up into pieces with variables for each part.  Then combine the expression into one 
    # line less than 80 columns if possible.
    curl ${a_url}   -H 'Connection: keep-alive'   -H 'sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"'   -H 'sec-ch-ua-mobile: ?0'   -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'   -H 'sec-ch-ua-platform: "Linux"'   -H 'Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'   -H 'Sec-Fetch-Site: cross-site'   -H 'Sec-Fetch-Mode: no-cors'   -H 'Sec-Fetch-Dest: image'   -H 'Referer: https://drivenc.gov/'   -H 'Accept-Language: en-US,en;q=0.9'   --compressed --output ${RAWDATA_DIR}/${a_filename_root}_${the_date}.jpg



done



# I used this before the hash map / loop was implemented
#cp foo.jpg NC_147_DAVIS_DR$((1 + SRANDOM % 1000)).jpg

