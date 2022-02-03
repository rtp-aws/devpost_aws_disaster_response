# Build an EB app 

These are revised notes as I build mvprc2

# first steps

Create the directory and activate the python virtual env

```
mkdir mvprc2
. ./setenv.sh
pyenv activate devpost
```

Setup nodejs.  I will still use this for hosting the webapp.  I 
just won't be using nodejs for the html/css/javascript bit in the browser.

`views/*.ejs` will be the html that refers to:

* public/css/styles*.css
* public/js/*.js


```
mkdir mvprc2
cd mvprc2
npm init -y
npm install express
npm install --save-dev nodemon
npm i ejs

# These were skipped
#sudo npm install -g browserify
#npm install aws-sdk
#npm install uuid
#npm install node-fetch@2
#npm install canvas

```

# git prep

setup .gitignore in this dir

```
cd mvprc2
$ cat .gitignore 
# JFD mods
*.backup
*.BACKUP
*.swp
node_modules/
.elasticbeanstalk
```

Make sure up to this point everything is in git.

```
$ git add --all; git commit -m "prep for mvprc2"; git push
```



# init eb

Make sure I'm using the right identity for cli usage.  In this
case I want to use devpost.

```
$ aws configure
AWS Access Key ID [****************####]: 
AWS Secret Access Key [****************####]: 
Default region name [us-east-1]: 
Default output format [None]: 

```

init eb

```
eb init
us-east-1
create new application 
default is "mvprc2"
Using node.js?  yes
Node.js 12 on 64bit Amazon Linux 2
Setup ssh? No
```

# migrate Makefile from mvprc1 and setup similar dir structure

copy over everything

```
$ cp ../mvprc1/Makefile .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/webapp/mvprc2
$ cp -ri ../mvprc1/public/ .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/webapp/mvprc2
$ cp -r ../mvprc1/views/ .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/webapp/mvprc2
$ cp ../mvprc1/server.js .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/webapp/mvprc2
```

# prune what we want to keep



## edit the makefile.  

*Notice the clean is just an echo*

```
SRC:=


EXE:=




# TODO use implicit rule
all: $(EXE)



runlocal: $(EXE)
        echo "running runlocal ..."
        npm run devStart

deploy: $(EXE) gitupdate
        echo "running deploy ..."
        eb deploy


gitupdate:
        echo "running gitupdate ..."
        git add .; git commit -m "mvprc2"; git push


clean:
        echo "running clean"
        #-rm $(EXE)
````

## remove the unused files

prune the static js files

```
$ cd mpvrc2
$ ls public/js
aws-sdk.js      bridge_bundle.js  odd_bundle.js       predict1.js        road_bundle.js
both_bundle.js  bridge.js         odd.js              predict_bundle.js  road.js
both.js         face.js           predict1_bundle.js  predict.js

$ rm -r public/config
$ rm -r public/js/*bundle*
$ rm  public/js/face.js

$ rm public/js/both.js
$ rm public/js/bridge.js
$ rm public/js/odd.js
$ rm public/js/predict1.js
$ rm public/js/predict.js
$ rm public/js/road.js
$ ls public/js/
aws-sdk.js
```

prune the node js files



```
$ ls views/
about.ejs  both.ejs  bridge.ejs  face.ejs  index.ejs  odd.ejs  predict1.ejs  predict.ejs  road.ejs
$ rm views/both.ejs views/bridge.ejs views/face.ejs views/odd.ejs views/predict1.ejs views/road.ejs
$ ls views/
about.ejs  index.ejs  predict.ejs
```

prune the server.js

Its to big to show here.  Just get rid of all the routes for road, both, odd and bridge.

# copy over the mvp `.ebextensions` dir

```
$ cd mpvrc2
$ cat .ebextensions/static-files.config
option_settings:
  aws:elasticbeanstalk:environment:proxy:staticfiles:
    /public: statichtml
    /public/imgs: staticimages
```


# Create an eb and use an environment

```
$ eb create --sample mvprc2-env
$ eb use mvprc2-env

```
# merge env config env variables 

The env variables are in the console env config.  Compare
the two configs in aws console and copy manually.  Don't know
any other way at this point.

Compare `mvprc1-env` and migrate to `mvprc2-env` for `configuration -> Environment properties`

# aws js sdk

I'm using the `aws-sdk.js` file from the cloud academy app.  Its the v2
version I was using when I had problems with it and browserfy in the nodejs 
approach with v3.

With that said, here is the docs link on v2 and it mentions using a link 
to the js for use in the browser.  I'll go ahead and pull it now and 
put in the `public/js` folder to see its problematic to use.  ie. I'll have two 
sets.

The doc url `https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/`

Getting the js

```
$ cd mvprc2/public/js
$ wget https://sdk.amazonaws.com/js/aws-sdk-2.1067.0.min.js
```

If I try to use in the browser:

```
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1067.0.min.js"></script>
```




# Make deploy and open

```
$ cd mpvrc2
$ make deploy
$ eb open
```

At this point the app is hosted via this url

```
http://mvprc2-env.eba-yytkzcbt.us-east-1.elasticbeanstalk.com/
```

# Setup cloud Front, Route 53

So that this webapp is setup with domain `https://mvprc2.rtp-aws.org`




## route 53

Add new record

1. for record name, add `mvprc2`
2. for route traffic to
3. select alias
4. choose alias to elastic beanstalk env
5. choose us east 1
6. choose mvprc2-env...

## cloud front

Choose the rtp-aws website distribution

1. click edit
2. add alternate CNAME mvprc2.rtp-aws.org
3. click save

## S3

Choose the bucket for uploads of images

1. Click the `permissions` tab
2. Scroll down to Cross-origin resource sharing (CORS)
3. click edit
4. update the allowed origins list to include mvprc2.

```
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET",
            "DELETE"
        ],
        "AllowedOrigins": [
            "https://rek-face.rtp-aws.org",
            "https://mvprc1.rtp-aws.org",
            "https://mvprc2.rtp-aws.org"
        ],
        "ExposeHeaders": []
    },
    {
        "AllowedHeaders": [],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]

````

## IAM roles

1. click IAM
2. click roles
3. search for cognitio
4. select jfdcodeacademyreckunuaths3putpolicy
5. Edit policy
6. Turns out all the resources are limited to the bucket so its all good
7. click cancel


1. click IAM
2. click policies
3. search for jfdcodeacadameyrecognitiondetectfaces_policy
4. select jfdcodeacadameyrecognitiondetectfaces_policy
5. Edit policy
6. For Read access, keep DetectFaces.  Add DetectLabels, DetectCustomLabels,DetectText, 
7. click okaccptwhatever

## Test 

navigate to `https://mvprc2.rtp-aws.org`

It works.



