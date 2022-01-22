# devpost_aws_disaster_recovery
rtp-aws.org submission for devpost.com AWS Disaster Response Hackathon

While working on this project, [this](https://www.wral.com/tractor-trailer-slides-off-n-c-147-2-killed-in-nash-county-crash/20081601/) occured.

![img](imgs/truck1-DMID1-5tkyirekb-640x360.jpg)

Later still [this](https://www.wral.com/ambulance-carrying-patient-skids-off-i-87-in-slew-of-ice-related-wrecks/20089162/) happened.


# devpost entry
https://devpost.com/software/todo-ot17ds


# MVPRC1

This is the webapp which is the frontend. MVPRC1 identifies the cameras used for model training and prediction.  Currently its just a viewer
but as of 20220121 it has SSL and is prepped for S3 access with cognitio for unauthenticated users to access S3 and hosted ML models.

[webapp](http://mvprc1.rtp-aws.org/)

# About the repo

Each directory has a README.md.  Each directory has a Makefile.  Operations for the directory are makefile targets.

* `bin/` Scripts and crontab for webscrape, sampling and S3 upload scripts are here.
* `imgs/`  Images used by markdown files
* `raw_data/` Raw pull of data by the webscrape script. These are put in git so that everyone is working with the same data.  Please don't update this directory.
* `webapp/`  webapp releases written in HTML/CSS/Javascript via Node.js.
* `python/`  .py files and jupyter notebooks.
* `matlab/`  Sample matlab experiments.
* `R/`  Sample R experiments.
* `docs/`  Notes on how everything works is here.
* `secrets`  encrypted keys for authentication.
* `groundtruth` AWS SageMaker Ground Truth notes and scripts.
* `rekognition` AWS Rekognition notes and scripts.
* `video` Any videos are put here.  These are for time lapse of my personal camera showing a sidewalk seam.


# Quickstart for contributors

I'm getting messages about how to help.  What to do?  I'm sorry I am not more
available.  Perhaps this note will give you an idea of my approach to this project.

1. Make a github id.  Afterwards ask for access to the repo, or send it via slack.
2. Visit https://rtp-aws.org look at the *about* page and join the slack workspace and then join the `#hackathon` channel.  Try to keep your conversation there. I'm not big on thread stuff, so don't worry about that.
3. Do whatever you wish.   Do whatever you think moves the ball forward based upon your own idea.  To update the github repo, you will need to do a `git pull request`.  I'll address the commit.  You will learn how to "do it by doing it." The slack is available to ask questions. FWIW, we spent two weekends doing `git pull requests` a few weeks ago in our usergroups.  I documented [git usage](https://gitlab.com/netskink/git-testy)  a while back.  If that repo doesn't help you,  do as I do  `google site:stackoverflow.com how do I yadda yadda`. Or, ask me. Most likey we will start together with the previous step though.
4. If you do whatever you wish is too general,  examine the code. Look for the keyword `TODO:`  This is your signal something has been left to-do.  You can do it.  I believe in you.
5. Larger to-do tasks are identified in the github issues tab.  You can either file
a bug or a feature request.  I'll let you know my opinion via the issue.  Don't be intimidated.  Its an easy way to work out issues.
6. Attend the weekly workshop Sundays at 11:00am EST. The online meeting is on https://rtp-aws.org in the about page.  If you are so inclined join the earlier 10:00am EST meeting for gcp.


General opinion on my approach.  I am not a good leader/motivator whatever. I am not
even a good teacher.  I am simply a guide.  This is what I want you to
keep in mind.  I'm pointing the way just a little bit.  I'll use the github issues to
identify the issues as I see them.  You can adjust the direction by adding new issues
or updating existing issues.  Its that simple.

# What are we trying to do

First thing we are going to do is simple.  See if we can use edge detection to model a simple approach.  Do a edge detection operation and see if we can detect a change.

Here is a subset of the NC 147 (Toll) & Davis Drive camera.  The image shows the seam between the elevated portion which will freeze first and the part which is not elevated.  Wind will not be blowing underneath this part.  Also traffic is not likely to be there, so we might find it helpful.  The interesting part is that we are lucky that its concrete on both portions where the edge is.  I'll drive out to take a look.  Perhaps the non elevated portion is where the asphalt starts.  However, note the other end of the bridge looks like the concrete extends to the non elevated portion.

![img](imgs/NC147_DAVIS_DR_subset.png)

and the edge version

![img](imgs/NC147_DAVIS_DR_subset_edge.png)



## NCDOT Cameras

This [site](https://drivenc.gov/#adverse-weather)  has cameras.  

I've managed to establish communications with [ncdot](https://www.ncdot.gov/travel-maps/traffic-travel/severe-weather/Pages/winter.aspx).  As a result, I have learned they don't maintain camera footage.  So, I can't ask for them to provide a stable, hi-res, continous feed of past events in conjunction with a camera using the same viewpoint.  It is what it is.  Hence, I am using what is publicly avaiable and web scraping and archiving.


### Issue with these cameras

* The cameras vary in quality
* The cameras are not fixed. Sometimes they point at a road.  Sometimes a bridge.
* Furthermore, the angle is not fixed.  When pointing at a bridge, a seam between elevated portion and non elevated is never the same.


These are some of the URLs obtained by chrome developers tools.  These images will update.  Currently not all of the ones pulled are listed here. See [here](imgs/raw_data) for the current dataset.

These were obtained by watching the urls via chrome developer tools.  I made a video in hopes of having additional folks provide find good footage [here.](https://youtu.be/RRuaG0_W7B4) 

### Sample cameras.

The cameras used for the project are reflected in the web app.  These are the intial cameras found with some commentary for historical reference.

#### NC 147 (Toll) & Davis Drive

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG
```

#### I-440 & US 64 Bypass

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG
```

#### I-540 & US 401

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG
```
#### Toll 540/US 1

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg
```

#### Toll 540 & NC 54

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC54.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC54.JPG
```

#### I-40 @ US-1

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_US1.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg
```
#### TOLL540 and Apex BBQ Rd

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG
```
