# debian notes

Adding a debian notes section to track down why the two linux laptops
fail to use pyenv the same.  Taken from my private gitlab.com notes.


# Which packages are installed?

```
apt list --installed
or
dpkg-query -l
or
dpkg --get-selections
```

# Which binaries are installed by a particular package?
```
dpkg -L eterm | grep bin
```

# what is version of an installed package?
```
dpkg -s eterm
```

