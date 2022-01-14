
# Atom notes

## Reference
https://linuxways.net/debian/how-to-install-atom-text-editor-on-debian-10/

## Install

```
wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
apt-get update
apt-get install atom
```




