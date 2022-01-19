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

