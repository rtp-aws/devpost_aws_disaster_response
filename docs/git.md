# git tips

If you fsck things up

# use stash to revert your changes

1. `git stash` this will store your changes in a stack.
2. `git pull` this will pull the latest
3. `git stash drop` this will toss whatever state you were in.


# restore deleted file

```
git checkout hashcode file
```

example

```
$ git checkout f363395dcaacd165286f416eadd32d224aadc93f docs/atom.md
```


# more stash info.

If you attempt to do a pull and there is a conflict.  You can use
git stash to resolve it. (Using `3\.` to do explicit numbering)

1. `git pull` results in confict.  In this case, the pull conflicts with a file
because it will overwrite a section of my local file with changes in the repo.

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git pull
remote: Enumerating objects: 168, done.
remote: Counting objects: 100% (168/168), done.
remote: Compressing objects: 100% (104/104), done.
Receiving objects: 100% (151/151), 19.66 KiB | 1.79 MiB/s, done.
remote: Total 151 (delta 93), reused 104 (delta 47), pack-reused 0
Resolving deltas: 100% (93/93), completed with 10 local objects.
From github.com:rtp-aws/devpost_aws_disaster_response
   34f0c03..54ae3a7  main       -> origin/main
Updating 34f0c03..54ae3a7

error: Your local changes to the following files would be overwritten by merge:
	README.md

Please commit your changes or stash them before you merge.

Aborting

davis@zatoichi:~/progs/devpost_aws_disaster_response$ git stash
Saved working directory and index state WIP on main: 34f0c03 mvprc1
davis@zatoichi:~/progs/devpost_aws_disaster_response$
```


2\. Not a problem. Stash my changes

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git stash
Saved working directory and index state WIP on main: 34f0c03 mvprc1
davis@zatoichi:~/progs/devpost_aws_disaster_response$
```

3\.  Now pull the latest code from the repo

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git pull
Updating 34f0c03..54ae3a7
Fast-forward
 README.md                           |   2 +-
 bin/scan_cameras.sh                 |   5 ++---
 docs/Makefile                       |   2 +-
 docs/atom.md                        |  58 ++++++++++++++++++++++++++++++++++++++++++++++++
 docs/debian.md                      |  93 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 docs/git.md                         |  24 ++++++++++++++++++++
 docs/mail.md                        |  11 +++++++++
 docs/makefile.md                    |  73 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 webapp/.elasticbeanstalk/config.yml |   2 --
 webapp/mvprc1/package-lock.json     | 149 --------------------------------------------------------------------------------------------------------------------------
 webapp/mvprc1/public/js/bundle.js   | 171 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++------------
 webapp/mvprc1/public/js/script.js   | 171 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++------------
 webapp/mvprc1/views/about.ejs       |   3 ++-
 webapp/mvprc1/views/index.ejs       | 157 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--------
 webapp/nodejs.md                    |   1 -
 15 files changed, 727 insertions(+), 195 deletions(-)
 create mode 100644 docs/atom.md
 create mode 100644 docs/debian.md
 create mode 100644 docs/git.md
 create mode 100644 docs/mail.md
 create mode 100644 docs/makefile.md
 delete mode 100644 webapp/.elasticbeanstalk/config.yml
davis@zatoichi:~/progs/devpost_aws_disaster_response$
```

4\.  Use `git stash` to examine available options

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git stash list
stash@{0}: WIP on main: 34f0c03 mvprc1


davis@zatoichi:~/progs/devpost_aws_disaster_response$ git stash show
 README.md | 7 ++++++-
 1 file changed, 6 insertions(+), 1 deletion(-)
davis@zatoichi:~/progs/devpost_aws_disaster_response$
```

5\. Use `git stash apply` to apply my stashed changes ontop of the latests code resulting in a conflict

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git stash apply
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
```

6\. Use can use `merge` and `merge tools` to resolve this.  I prefer just use an editor.

```
i README.md

...
...
...
# devpost entry
https://devpost.com/software/todo-ot17ds


# MvpRc1
<<<<<<< Updated upstream
[webapp](http://mvprc1-env.eba-sw3ee4ww.us-east-1.elasticbeanstalk.com/)
=======
[webapp](http://mvprc1-env.eba-sw3ee4ww.us-east-1.elasticbeanstalk.com/index.ejs)
>>>>>>> Stashed changes

# About the repo

File are mostly kept in directories.  Each directory should have a README.md
Maintain notes about the directory there.

...
...
...
```

7\. Close the file without saving and look at result with `git diff`

```
davis@zatoichi:~/progs/devpost_aws_disaster_response$ git diff
diff --cc README.md
index 2dc54be,52ccaff..0000000
--- a/README.md
+++ b/README.md
@@@ -9,7 -9,7 +9,11 @@@ https://devpost.com/software/todo-ot17d
  
  
  # MvpRc1
++<<<<<<< Updated upstream
 +[webapp](http://mvprc1-env.eba-sw3ee4ww.us-east-1.elasticbeanstalk.com/)
++=======
+ [webapp](http://mvprc1-env.eba-sw3ee4ww.us-east-1.elasticbeanstalk.com/index.ejs)
++>>>>>>> Stashed changes
  
  # About the repo
```


8\.  Things to remember about the diff.

* `+` signs mean added
* `-` signs mean deleted
* `<<<` means the left side code or in this case, the code from upstream
* `>>>` means the right side code or in this case, the local changes from the stash.
* `===` is a dividing line when comparing changes.

Simply delete the lines between `<<<<` and `===`.  Then delete the line `>>>`.  `Git push` afterwards.


