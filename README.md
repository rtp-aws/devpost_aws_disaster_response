# devpost_aws_disaster_recovery
rtp-aws.org submission for devpost.com AWS Disaster Response Hackathon

# debpost entry
https://devpost.com/software/todo-ot17ds


# about the repo
* `imgs/`  sample images used by markdown files
* `matlab/`  sample matlab experiments
* `R/`  sample R experiments

## NCDOT Cameras

This [site](https://drivenc.gov/#adverse-weather)  has potential cameras.  However they are tiny low res images and not live.  I have contacted the NCDOT but not received a response.

These are active webcams which provide a jpg.  

The urls look like its a camera name and timestamp.  Its not a timestamp. Fetch of that URL gives the current camera image.  

*TODO* Determine update frequency


### Best Camera so far

#### NC 147 (Toll) & Davis Drive
In the lower right corner is the closest view of boundry of roadway and elevated roadway.  However, the corresponding median portion is not visible.  Such a pity, they could have angled the camera down a few degress and it would be perfect.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG&t=1642082764209)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG&t=1642082764209
```



### Other Potential cameras


#### I-440 & US 64 Bypass
This one has a good view of white line, shoulder and appears to be potentially high res.  Its also not obscurred with text overlay.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG&t=1642081402751)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG&t=1642081402751
```

#### I-540 & US 401 
This one could be hi-res.  It shows the seam between road and elevated roadway.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG&t=1642082230568)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG&t=1642082230568
```
#### Toll 540/US 1
Newer camera.  Shows junction of roadway and elevated roadway, but distant.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg&t=1642094997214)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg&t=1642094997214
```


### Not good ones, but notable

#### Toll 540 & NC 54

What are is this, Russia?  Does show the median.  Low res and does not show seam.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC54.JPG&t=1642082877653)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC54.JPG&t=1642082877653
```

#### TOLL540 and Apex BBQ Rd

Shows roadway with wide median and seam in distance.

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_US1.JPG&t=1642095364324)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg&t=1642083392226
```

#### I-40 @ US-1

Shows roadway with wide shoulder and hi res

![img](https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG&t=1642095317555)

```
https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG&t=1642095317555
```
