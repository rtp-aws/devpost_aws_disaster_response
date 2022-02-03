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



