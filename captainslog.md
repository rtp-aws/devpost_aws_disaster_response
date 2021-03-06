# captains log

## 20220114

### cameras are messed up

I woke up this morning and noticed the  README.md cameras looked wrong.
The cameras were either moved or something else happened.  I'll need
to look into it.  See NC147_DAVIS_DR_20220114Z0620.jpg vs NC147_DAVIS_DR_20220114Z0625.jpg.
Prior to this the camera was pointed almost perfectly.

I added some additional cameras in case they change view.

### adjusted camera webscape cron

adjusted cameras to not pull overnight


### matlab sample

I also got an update last night regarding a call to help on the matlab code.
Someone redid it using a MAC.  It is worth keeping around.

```
dosage_schedule = [3 2 1];
num_new_patients = [1 2 1];
doses = length(dosage_schedule);
patients = length(num_new_patients);

% Pre-allocate dosages array with zeroes, since we accumulate
% The dosages will just trail after the last new patient for the rest of the schedule
% Also note that we already start seing similarities with convolution, which has a length of M+N-1
dosages_given = zeros(1, patients + doses - 1);

for day=1:patients % from first to last patient
  % schedule for that patient
  day_doses = day:(day+doses-1);

  % Take a slice of the array, from the current day to the last of the treatment
  % accumulate all the doses for the incoming patients
  dosages_given(day_doses) = dosages_given(day_doses) + num_new_patients(day) * dosage_schedule;

end

% dump output
dosages_given
```


### Makefiles
Yesterday I had some issues with Makefiles.  I'm trying to resolve that.  I want to
iterate clean in all the dirs from top of tree.  I also want to be able to push
to git no matter which dir I'm working in.

It took me awhile. I actually learned a few things.  This is a very clean implementation
of a nested makefile.  I'll be honest, I used to do the for loop trick.  I made 
a SO post since I liked the mad-scientist post [here](https://stackoverflow.com/questions/17834582/run-make-in-each-subdirectory/70715518#70715518)




### python
Started the python setup, but noticed I have a problem on the laptop where
I installed the eb cli via scripts the first time. On that laptop I did not have
pyenv already installed.  It installed it, and it did it globally.  Also the
setup script seems wonky.  Bottom line is that on that box. Its now broken using
the instructions on the big computer.  The big computer had pyenvv already installed
prior to usage of the scripts so it used pyenv instead of installing.

I had to sidestep to resolve this.  Turns out the eb_cli scripts and the
realpython.com blogs missed this one key point from the pyenv github



>
```
eval "$(pyenv init --path)":
```
> Sets up your shims path. This is the only requirement for `pyenv` to function properly. You can do this by hand by prepending `$(pyenv root)/shims` to your `$PATH`.

### twitter

Tom posted a GondorCallsForAdd.exe for me [here](https://twitter.com/AWSOpen/status/1482031484420739072).  That was nice.
I also checked the slacks, IRC, discord on devpost etc for teammates.

## 20220115

### Atom

Last night I finished setting up atom.  I reimaged zatoichi at the start of the new year.  I have been installing software and tools ever since.  That will help.  My vim setup does tabs right for python but not for Makefiles.  I used it when I fixed up the multi directory clean target.  Afterwards I did a python 1-D convolution sample.  I intend to use atom for the python console development whenI am not using vim.  For the entry we need to use Sagemaker.  I hope they mean Sagemaker as in studiolab and not juptery notebook. Which leads to the next entry.

I updated the tools markdown to show some of the configs I used for atom.  Afterwards, I was thinking I wish I had included some of the pip installs.  I did setup atom so it uses my local pyenv-virtualenv setup rather than the global path mods as many of the packages required.

### youtube and sagemaker
I watched the first part of the AWS ML video playlist and made a markdown on how to do the sagemaker setup.  I will update it and start using their provided tutors this morning.

### Recruiting 

I made some more posts for recruiting yesterday and this morning I met with a new friend.  Cool sounding guy.  Has similar interests.  We shared screens and talked at length.

During this time noticed the recovery vs response typo.  Fixed that.


### python

Worked with mxnet and juypter notebooks.  Basically started up my old class instance in storage from 1.5 years ago.  Pulled some of the files from another repo to here.
Experimented briefly with the convolution code.  Created some notes on convolution at top docs dir.  Noted the stuff from watching the videos in part one.  I included
my notes as goodnotes.pdf.  I tried to look at the sum(axis=0) stuff.  I can't remember the python numpy array syntax for multi-dimensonal arrays.
Will make some test code in conjunction with notes.

I'm tirec.

Was thinking do I ask people to clean up the images or writ some code to clean it up?

I also need to md5sum and hash table3 the dupes.


Rnamed the repo. It was recovery insteadc of response.


## 20220116

### weekly workshop

Spent some time with rtp-aws.org going over the project.  Short demo on rekognition.   Short demo on the convolution testy code in notebook form.

### Removal of dupe images

Adrian added code for removing dupes in juypter notebook form.  I went ahead and created a bash script to remove dupes.  Removed the dupes.  Removed the image pulls of 
the camera with a lot of overlays.


### Rekognition

Watched some of the videos.  Will use Adrians advice for determining labels.

### Recruiting 

Talked to Arjun a few times.


## 20220117

### MVP

Woke up this morning and realized we need a MVP.  Created one using the eb_testy code.  Created and somewhat documented process.  Also created a devpost user in aws so I can 
start handing out userids for people.  

16:49 lol, I have a webapp with a selectable camera feed.

### IAMS

While doing the eb webapp, realized I needed seprate credentials.  Not a security expert with aws.  Did add some. Added notes on how to recreate.  Did add encrypted credentials to repo.  Updated makefiles to ensure any puts do a clean to remove any keys or swap/backup files.

## 20220118

### R

Wasted some time studying R.  I did put one file here just for reference.

### Rekognition

Watched some videos.  Uploaded some raw_data to S3 in prep for usage.

### Sagemaker ground truth

Watched some videos  Uploaded some raw_data to S3 in prep for usage.


## 20220119

### overzealous clean

I copied a makefile line for clean to the docs folder two days ago.
As a result, I deleted some files.  I restored some of the files.  I noticed today
some are still missing.

```
John F. Davis committed 2 days ago
1 parent 7e5dcdf commit 85c341b6536d62e8005f869dbf23b915b81b0029
```

* docs/aws_account.md
* docs/convolution.md


This commit seems to be where I want to be.

```
John F. Davis committed 3 days ago
1 parent 485bd80 commit 83eb0242e482f9cee20115dc793ee25902c6724c
```

Missing from the restore are

* urls.md
* tools.md
* rekognition.md


I restored them via this method:

```
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response$ git checkout 83eb0242e482f9cee20115dc793ee25902c6724c urls.md
Updated 1 path from 3c6c91c
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response$ git checkout 83eb0242e482f9cee20115dc793ee25902c6724c tools.md
Updated 1 path from 3c6c91c
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response$ git checkout 83eb0242e482f9cee20115dc793ee25902c6724c rekognition.md
Updated 1 path from 3c6c91c
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response$ cd docs
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/docs$ git mv ../urls.md .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/docs$ git mv ../tools.md .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/docs$ git mv ../rekognition.md .
(devpost) davis@zatoichi:~/progs/devpost_aws_disaster_response/docs$ 
```

### My own cameras

Last night I thought I should upload some of my own cameras footage.  In particular of driveway and the snow.  Discovered this morning when I went to do it. The cameras had
been turned off a few days before the storm. timingandluck.com  I did get some clips from frontdoor.  Sadly I swept that portion so no such ice to water to ice.  I did pour 
a bucket of water and recorded the flow though.


### Sagemaker groundtruth

I created a poll, job and submitted myself to the job.  Labeled some.  Realized I needed a bad data label for the camera images which were messed up.  Did that.  Redid with
additional labels.  Made a video.  Went through 300 images.

Documented it.

Tried to import into rekognition and had problems.  The json file doesn't match.

Found this url for fixing it.

https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-gt-cl-transform.html

I'm tired for the day though.

### Rekognition

Figured out how to import Ground Truth to Rekognition.

Trained a model

Added code to sync git with S3.

Added code to random pick images and upload to a different bucket.  Did this to work on Ground Truth and Rekognition when I noticed GT was not randomly picking images.  It was picking
the first set of images up to 1000 max.


## 20220120

Started looking at model training results.  Getting a feel for the workflow.

Uploaded a video on issue with labeling images added to dataset after the fact.

I'm thinking of a multi stage model.  I'll explain more later as I learn more how Rekognition and Ground Truth work, but for now basically.  I want to run through a series of 
models from an input camera image.  Is is a daylight image? Yes, proceed to is it a bridge? Yes, proceed is snow is the sceene?  Use object detection to locate the bridge seam.
Pass this bounding box to the code to detect ice.  Of course this will all be checked with a temperature at current location.

Anyway that is the general idea.

I am going to set aside the rekognition work for a bit.  The video is out on the bug with images.  I will revisit later.  I'll catch up on some of the other todos.

I worked on the videos/github from cloudacademy regarding rekognition.  I gave a [pull request](https://github.com/cloudacademy/aws-machinelearning/pull/1#pullrequestreview-858789590).  It will help with this project but only slightly.  Perhaps with the 
webapp.


Tried a lot to get a foo.rtp-aws.org webapp working.  I don't want to break the user group website, so I moved skink.net to aws.  I tried to get it working with foo.skink.net.
On the upside my notes from rtp-aws.org were helpful. I can see how I need to adjust them.  Sadly still could not get it working.  Will try again in morning.


almost forgot.  I noticed in my pull request I had left off some stuff between my version and the commit.  I had the editor open in atom.  When I did my pull i had a conflict.
atom handled the merge like a mergetool.  Very nice.  Totally without any skill.  Something to keep in mind.

## 20220121

Waiting overnight the foo.skink.net entry still did not work.  In fact, http://www.skink.net/index.html did not work either.

Did some recruiting via linkedin.  Asked for some help in various slack channels and linkedin for the above problem.  Kind of a inconjunction with the hackathon, because it is.

Posted the encrypted secrets for the hackathon on linkedin.  We will see if its a problem.

### MVPRC1

Spent way to much time on the app.  Went through cameras.  Trying to find the ones which are best.  Adjusted some code in camera scans script.

## 20220122

The webapps are hosted using the rtp-aws.org.  They also use SSL.  The notes on how to config are in different repos though.  Need to add copies here.  The S3/Route53/CloudFront doc is in rtp-aws.org source repo.  The elastic beanstalk notes on how to set load blancer is
in the eb_testy repo.

## 20220123

Hosted the two user group meetings.  Figured out part of my problem with the
cloud watch and logging was due to IAM permissions.  The IAM permissions also
apply to these tools.  Created different IAM login and roles to address logging
and devpost user.

Started a class on Cloud Watch via cloudacademy.

Git pull request to cloudacadmey git repo approved.

Pruned S3 buckets of images and old rekognition models for custom labels.


## 20220124

Continued the study of AWS Cloud and Recognition classes via cloudacademy.

Got a cli method of peforming object identificaton of images with json output working via cloud
[this](https://github.com/cloudacademy/aws-machinelearning) repo.  

Updated the mvprc1 webapp to draw bounding boxes with resizable images as an overlay.

For grins put the face app up.  Had to modify the CORS setting for S3.

Learned that the icons in the cloudacademy face tracking app uses this line

```

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

```

Its getting icons from there.  I guess this means its more than just fonts.  I suppose
its like bootstrap.css

Complted the rek lab on cloud academy.

## 20220125

Updated bbq road.  closed some issues.

Worked on the  cloud acadmey class for aws cloud watch

Noticed that my rek credentials were in git.  I need to fix that.  I worked
on varioous ways to hide them.  Don't know how to hide via google developer tools.
Using some various techniques to at least not show in git.  This prompted me to how
to read files, how to load json files, etc.


## 20220126

Worked on mvprc1.  I am trying to fix the problem with leaked git credentials.

I noticed the cloudacademy sample uses the AWS SDK v2.  I noticed the rekog-ai sample uses credentials.
The code mentions not to put them in git, but to work the file with his overall creds need to be
read by the code.  this is worse than the cloudacademy source.

However, I have been trying to figure a way to work with fetch to read a file.  I noticed that 
the aws sdk has multiple variants of how to read creds for the different components.  Only the
top level one seems to readfrom a file.  However it will pose the same problem.  
If the file is not put in the repo it will not be in the webapp.  If it is in the webapp
it can be read via console developer tools.




## 20220127

Continuing to work on the removing credentials from git.



## 20220128

Fixed the issue with credentials.  Reworked the cloudacadmey code.  Now it 
fetches credentials from express server.  Express server pulls creds from
environment setup by elastic beanstalk environment settings in aws.

Talked with Mike S in the gcp slack. Possibly he will help with labeling.

Added some more camera images.


## 20220129

More snowfall.  Will have meeting with Adrian to help him on his entry.
I am rewroking the face app to have a navigator so I can use it in conjunction with the node version.

## 20220130

Finished the rewrite of faces demo app.  Started the prediction page.

## 20220131

Worked some more on the predictions page where I am trying to upload to 
S3 the image from the webcam.

I've learned that node.js does not implement everything in S3.

Moved code from node to javascript to attempt to download the saved images.

## 20220201

Learned some stuff about Blobs.  Learned how to get bytes from images.  
Learned that I can not get past this CORS error since I have no cooperation
from NCDOT and they will not allow a change in their server.  This is not a 
problem and understandable.  

However, it did give me the opportunity to learn about CORS and javascript/Node.
That is a good thing.  I will go to plan C and use images in S3 from raw uploads.

I was reading and found the following documents

* https://www.atmos.washington.edu/~cliff/Roadway2.htm
* https://www.weather.gov/phi/winter1
* https://tc.copernicus.org/preprints/tc-2021-259/tc-2021-259.pdf

Daily weather

https://www.weather.gov/wrh/Climate?wfo=rah

## 20220202

Stopped the cronjob.  No upcoming snow.  I got a response from NCDOT that
camera api was changing.  I did not see any errors as of 10am when I
stopped the webscrape.  I figure I have enough data at this point 
anyway.

I updated the urls to use new web cam urls.

I learned how to download the CORS images.



## 20220203

I learned I had worked myself into a hole with NodeJs.  I was using it the wrong way.

I left what I had with MVP RC1 and moved to a new version MVP RC2.  In this case, I will
keep the nodejs out of the browser code.  Remove the face and bridge stuff.  It will 
be simpler to maintain and build faster.

20220209

A lot has transpired and I have been amis with my notes.

I deployed a few models.  Made a workable setup for AWS API Gateway for a rest
api which calls a lambda.  The models were bad.  They could not identify a 
bridge much less a seam or ice.

I was getting the dotted white lines detected as ice.  The bridge was detected with portions in the sky.

20220212

I am still working on a killswitch to avoid the ~$400 monthly bill.  Even though
aws credits from the usergroup leaders, cloud builders, and three months of 600 hours of rekognition meant no out of pocket money was spent, I don't want to have this problem in the future.  Not to mention some security exploits were 
exposed in order to get something working.  All these need to be tightened 
up.  The killswitch is something needed as a backup.

I have the throttle portion of the killswitch for api gateway in place.
I also know that lambda's use roles to determine which resource they 
can modify.  I added the role to manipulate api gateway.  I am in process
of putting in a mod for rekognition now.

I learned how to implement cloudfront invalidation.  Its not important 
here but is something to know.  I did that.

I think I mentioned I am planning to rotate the images in mxnet.  That is added
as a [todo.](https://github.com/rtp-aws/devpost_aws_disaster_response/issues/19)

Ive also been busy looking for a job.  One of the jobs I had everything but
go.  I saw a test of javascript and go.  I was impressed how much faster
go was than pure javascript.  I did some go back in 2014 when I worked in 
sunnyvale.  I resumed it for a day sometime afterwards.  I resumed in ernest
learning go a few days ago.  I might not incorporate it, but some things
which impressed me so that I might use it here.

* can run on a arduino - still prefer C - but interesting
* has some tooling which reminds me of what I have seen with dart
* the speed versus javascript
* i even saw some dataframe libs/modules
* looks like C - ive noted this before
* one of the authors was Ken Thompson

As part of looking for a job, and applying to interviews again, I updated
the classwork section and project pages on skink.net.  That is when I learned
about the cloudfront stuff we will use here.

Regarding this project.  I answered emails from the contest judges.

I submitted a few proposals to the call for papers at a few conferences.

I submitted an entry to a new hackathon.  I answered some questions.
I am in the pipeline to get some credits.  

I did some more recruiting.  I seem to be getting more responses.  I 
guess when you have something to show it helps drum up support.




20220213

Did some image processing mxnet.  I was able to make grayscale, but unable to remember how
to make 1 layer image.  Need to be able to add method for rotate and this requires
I take the grayscale 3 layer image into one layer.

20220214

Found the UC Berkely MXNet video series they have for a class on youtube.  I did a type along on the linear algebra.  Took some latex notes as I implemented 
the videos formulas.  I also did the mxnet code in a jupyter notebook again.


20220218

Still working on the mxnet code.  I believe I have an understanding enough to attempt
to do the rotate using only mxnet again.

20220310

Finally figured out how to do the rotate, albeit not great, and when looking to see
how to save the results using the mxnet.image api, I noticed a rotate api. lol
With that said, I updated the gray_rotate.py script to gray_rotate2.py script
to use the api.  This api zooms out to maintain the same image size while showing
the new pixels as a result of the rotate.

Last weekend Adrian found this url which uses opencv for lane detection.  It
seems interesting.  It is [here](https://github.com/utkarshiam/Road-Lane-Detection).
FWIW, I added some notes how the two routines for rotate using mxnet compares
with imagemagick.  Note, I did not use a GPU nor did I parallel subregions of
an image.  The python directory has the timings markdown file.

20220311

Tried to build the model using 20 images using my grayscale, rotate, crop method.  I got
a failure where I did not have enough images.  I redid with 100 images using just the
mxnet rotate method.  Even used color images.  The first two training sessions failed. The third
session passed but still has a very low F1 score.

20220314

Finished the presentation for aidaug.org pi day event.

