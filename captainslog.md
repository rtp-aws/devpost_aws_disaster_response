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


