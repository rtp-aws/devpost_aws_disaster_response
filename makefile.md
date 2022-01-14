# Makefile notes


A Makefile is of this form

```
some-target: some-dependicies
  some-rule
```

When a target is older than its corresponding dependency, the rule is executed.

For example:

```
foo.exe: foo.c
  gcc foo.c -o foo.exe

```


## := vs =

These are rules for assigning variables which can be used to make the
makefile more concise

taken from [this](https://stackoverflow.com/questions/10227598/what-is-the-difference-between-and-in-make-file)

* `:=` is expanded once
* `=` is expanded each time its used

## special variables 

taken from [this](http://www.gnu.org/software/make/manual/make.html#Automatic-Variables)

* `$<` is known as first prereq - i call them dependencies
* `$?` is known as all prereq newer than target - ditto
* `$@` is known as target filename.

```
goo:

loo:

foo:goo loo
	echo "first prereq "$<
	echo "all prereqs "$?
	echo "the target" $@

```

and using make -s to avoid echo of commands. silent mode.

```
$ make -s foo
first prereq goo
all prereqs goo loo
the target foo
```


taken from [this](https://www.gnu.org/software/make/manual/html_node/Goals.html)

`$(MAKECMDGOALS)` is whatever was specified on cmd line if at all.

## .phony

taken from [this](https://stackoverflow.com/a/17845120/1008596)

`.PHONY` is for targets which you want to be built every time the makefile runs, regardless of whether it exists or not or is out of date. – 
[MadScientist](https://stackoverflow.com/users/939557/madscientist)

## subdirs for clean and all

[i like this](https://lists.gnu.org/archive/html/help-make/2008-04/msg00052.html)