
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

```
pyenv activate devpost
pip install --upgrade pip
pip install lsp-server
pip install python-lsp-server
python -m pip install 'python-lsp-server[all]'
python -m pip install git+https://github.com/tomv564/pyls-mypy.git
pip install numpy

```

## packages

### Script

Used to run python .py files

Go to Packages->Configure Run Options

* current working directory       
    * /home/davis/progs/devpost_aws_disaster_response/python
* Command
    * /home/davis/.pyenv/shims/python


### Ide Python

Use for python language assistance

For package config

* Python Executable
    * /home/davis/.pyenv/versions/3.7.2/bin/python

### ide-html

Use for webapp

### ide-css

Use for webapp


### atom-ide-javascript

Use for webapp

