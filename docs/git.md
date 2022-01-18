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


