# Notes on installing elastic beanstalk cli


####
#  Pulled from another sample. Don't take for granted.  Use the 
#  from TOPDIR/python/setenv.sh instead
#
# This is stub 20220117
###





## prereq
I am using a terminal which has run the the `setenv.sh` from the pyenv readme.


Use this url https://github.com/aws/aws-elastic-beanstalk-cli-setup

Follow the guide in the README.md

```
sudo apt-get install build-essential zlib1g-dev libssl-dev libncurses-dev libffi-dev libsqlite3-dev libreadline-dev libbz2-dev
```



## obtaining eb cli

```
./aws-elastic-beanstalk-cli-setup/scripts/bundled_installer
```

After doing the install, it uses the existing pyenv setup and installs a custom python 3.7.2 

It provides the following post install setup.

```
export PATH=/home/davis/.ebcli-virtual-env/executables:$PATH

export PATH=/home/davis/.pyenv/versions/3.7.2/bin:$PATH
```

I added that to the existing `setup.sh` and then just to be pedantic I did this as well.

```
davis@zatoichi:~/progs/eb_testy$ pyenv versions
* system (set by /home/davis/.pyenv/version)
  3.7.12
  3.7.2
davis@zatoichi:~/progs/eb_testy$ pyenv local 3.7.2
davis@zatoichi:~/progs/eb_testy$ pyenv versions
  system
  3.7.12
* 3.7.2 (set by /home/davis/progs/eb_testy/.python-version)
davis@zatoichi:~/progs/eb_testy$ 

```

The result should look like this

```
# from pyenv setup
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# from eb setup scripts
export PATH=/home/davis/.ebcli-virtual-env/executables:$PATH
export PATH=/home/davis/.pyenv/versions/3.7.2/bin:$PATH


```


Now, source the new `setup.sh` script.

```
. ./setup.sh
```


## Interactive Method for creating environment

Using this directory for source, init eb but do not use git.  We are already in a git repo.

### Install npm,express and prepare the dir for node development


Using this guide

```
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html
```
Note, in blue bar, this is `aws->documentation->aws elastic beanstalk->developer guide.`  Then in side bar `Platforms->working with Node.js->the node.js platform -> Tutorial - Express`



#### install npm, node and express

```
sudo apt-get install npm
sudo npm install -g express
sudo npm install -g express-generator
```


```
express && npm install
```

#### modify .gitignore

NOTE: This git repo already has a .gitignore for Node.js, but ensure the follwing are present.


```
# JFD mods
*.backup
node_modules/
.elasticbeanstalk
```

#### init an Elastic Beanstalk environment

Using interactive mode

```
davis@zatoichi:~/progs/eb_testy$ eb init

Select a default region
1) us-east-1 : US East (N. Virginia)
2) us-west-1 : US West (N. California)
3) us-west-2 : US West (Oregon)
4) eu-west-1 : EU (Ireland)
5) eu-central-1 : EU (Frankfurt)
6) ap-south-1 : Asia Pacific (Mumbai)
7) ap-southeast-1 : Asia Pacific (Singapore)
8) ap-southeast-2 : Asia Pacific (Sydney)
9) ap-northeast-1 : Asia Pacific (Tokyo)
10) ap-northeast-2 : Asia Pacific (Seoul)
11) sa-east-1 : South America (Sao Paulo)
12) cn-north-1 : China (Beijing)
13) cn-northwest-1 : China (Ningxia)
14) us-east-2 : US East (Ohio)
15) ca-central-1 : Canada (Central)
16) eu-west-2 : EU (London)
17) eu-west-3 : EU (Paris)
18) eu-north-1 : EU (Stockholm)
19) eu-south-1 : EU (Milano)
20) ap-east-1 : Asia Pacific (Hong Kong)
21) me-south-1 : Middle East (Bahrain)
22) af-south-1 : Africa (Cape Town)
(default is 3): 1


Select an application to use
1) eb-node-tutor-noninteractive
2) eb-node-tutor-interactive2
3) eb-node-tutor-interactive
4) eb_node_tutor
5) eb_node_tutor_interactive
6) goes_aws
7) [ Create new Application ]
(default is 7): 7


Enter Application Name
(default is "eb_testy"):

Application eb_testy has been created.

It appears you are using Node.js. Is this correct?
(Y/n): y
Select a platform branch.
1) Node.js 14 running on 64bit Amazon Linux 2
2) Node.js 12 running on 64bit Amazon Linux 2
3) Node.js 10 running on 64bit Amazon Linux 2 (Deprecated)
4) Node.js running on 64bit Amazon Linux (Deprecated)
(default is 1): 2

Do you wish to continue with CodeCommit? (Y/n): n
Do you want to set up SSH for your instances?
(Y/n): n
davis@zatoichi:~/progs/eb_testy$ 

```

Since we did not use codecommit, it uses this git.  We'll see what happens.

#### create an eb environment

```
eb create --sample eb-testy-env
```


#### deply the app

```
eb deploy
```

#### Test the app

```
eb open
```


#### Tag the code

```
davis@zatoichi:~/progs/eb_testy$ git tag -a v1.0 -m "my working 1.0 with default app"
davis@zatoichi:~/progs/eb_testy$ git push origin v1.0
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 184 bytes | 184.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:rtp-aws/eb_testy.git
 * [new tag]         v1.0 -> v1.0
```


#### Migrate the goes pseudo binary code

remove the exising code

```
davis@zatoichi:~/progs/eb_testy$ rm app.js 
davis@zatoichi:~/progs/eb_testy$ rm -rf bin
davis@zatoichi:~/progs/eb_testy$ rm -rf node_modules/
davis@zatoichi:~/progs/eb_testy$ rm package*
davis@zatoichi:~/progs/eb_testy$ rm -rf routes/
davis@zatoichi:~/progs/eb_testy$ rm -rf public/
davis@zatoichi:~/progs/eb_testy$ rm -rf views
davis@zatoichi:~/progs/eb_testy$ ls
eb_cli.md  eb_cli.md.backup  LICENSE  pyenv.md  README.md  setenv.sh
davis@zatoichi:~/progs/eb_testy$ 
```




Add the goes binary code

#### install the node modules

```
npm init -y
npm install express
# npm install --save-dev nodemon
npm install @dendra-science/goes-pseudo-binary
npm i ejs
npm install -g browserify
```

#### test it locall

```
make
node server.js start
```


#### configuring the static files

Using this guide

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-staticfiles.html


Add .ebextensions/static-files.config

```
davis@zatoichi:~/progs/eb_testy/.ebextensions$ cat static-files.config 
option_settings:
  aws:elasticbeanstalk:environment:proxy:staticfiles:
    /public: statichtml
    /imgs: staticimages
```

```
git add --all
git commit -m "wip"
git push
```

```
eb deploy
```



