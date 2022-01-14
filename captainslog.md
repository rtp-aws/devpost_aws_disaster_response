# captains log

## 20220114

### cameras are messed up

I woke up this morning and noticed the  README.md cameras looked wrong.
The cameras were either moved or something else happened.  I'll need
to look into it.  See NC147_DAVIS_DR_20220114Z0620.jpg vs NC147_DAVIS_DR_20220114Z0625.jpg.
Prior to this the camera was pointed almost perfectly.

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
