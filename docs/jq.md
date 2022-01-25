# jq

jq can be used to build JSON strings.  I needed that for the rek_testy.sh script.



# To create JSON strings with variable assignments: 

```
# -n do not read input
# -c compact print
# --arg name value value is treated as a string
bar="yo"
jq -nc --arg bar "$bar" '{foo:$bar}' ;
```

and

```
a=("an array" "of strings"); b="a string"; printf '%s\0'
"${a[@]}" | jq -RscM --arg b "$b" '{list: split("\u0000"), string: $b}'
{"list":["an array","of strings",""],"string":"a string"}

```
# some other guy

If you ever want to search for something in a JSON configuration, but you don't know where it might be nested, 
aliasing the following command has helped me a lot: 

```
`jq -cr 'def f: if "\(.)" | test("^\\d|\\W") then "[\(tojson)]" else ".\(.)" end; def t: map(f) | join("") | sub("^\\.?"; "."); paths([..] | length == 1) as $p | "\($p | t)=\(getpath($p) | tojson)"'`
```


# what I did

This worked.

```
TOP_DIR="/home/davis/progs/devpost_aws_disaster_response/"
RAWDATA_DIR="${TOP_DIR}/foo/"

# S3 Folder
BUCKET="icy-bridge"
FOLDER="samples"


NAME=${FOLDER}/${FILE}
echo ${NAME}


#jq -nc --arg NAME "$NAME" '{Name:$NAME}' ;
#jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{Bucket: $BUCKET, Name:$NAME}' ;
#jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{S3Object: {Bucket: $BUCKET, Name:$NAME}}' ;
S3_JSON=$(jq -nc --arg BUCKET "$BUCKET" --arg NAME "$NAME" '{S3Object: {Bucket: $BUCKET, Name:$NAME}}')
echo $S3_JSON

aws rekognition detect-labels --image ${S3_JSON}
```

# I tried using other bashisms but could not get it. 

Hence the punt to `jq`

```
#S3_FILE_SPEC=$(printf '{"S3Object":{"Bucket":"%s","Name":"%s/%s"}}' ${BUCKET} ${FOLDER} ${FILE} )
#echo ${S3_FILE_SPEC}
#aws rekognition detect-labels --image \"{"S3Object":{"Bucket":"${BUCKET}", "Name":"${FOLDER}/${FILE}"}\"
#aws rekognition detect-labels --image=${S3_FILE_SPEC@Q}


aws_cmd=$(printf 'aws rekognition detect-labels --image="{"S3Object":{"Bucket":"%s","Name":"%s/%s"}}"' ${BUCKET} ${FOLDER} ${FILE} )
echo ${aws_cmd}
eval ${aws_cmd}
```






