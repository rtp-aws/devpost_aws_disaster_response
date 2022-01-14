# installing and using pyenv on Debian

## Sources used in for making these notes

* https://github.com/pyenv/pyenv
* https://realpython.com/intro-to-pyenv/

The second guide lists packages to install.  Modify to use these packages.

```
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python3-openssl
```

Furthermore, the second guide suggests using the pyenv-installer which is another repo in the pyenv user from git.

```
curl https://pyenv.run | bash
```

Both guides mention updating your `PATH` environment variable in `.bashrc` or `.bash_profile`.  I prefer to keep my system as close to testing as possible and use `setenv.sh` scripts.

With that said, create a `setenv.sh` with the following contents.  NOTE: I tried to get this to work using `bash here document` but couldn't figure out a way to avoid the `eval` statement executing. 

```
export PATH="$HOME/.pyenv/bin:$PATH"
# the below line was missing from the "realpython.com" guide
eval "$(pyenv init --path)"
# 
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

Make it executable
```
chmod +x setenv.sh
```

Then execute the path mods in your current shell like this.

```
. ./setenv.sh
```

As a result of executing that command it will print something like this:


```
export PATH="/home/davis/.pyenv/plugins/pyenv-virtualenv/shims:${PATH}";
export PYENV_VIRTUALENV_INIT=1;
_pyenv_virtualenv_hook() {
  local ret=$?
  if [ -n "$VIRTUAL_ENV" ]; then
    eval "$(pyenv sh-activate --quiet || pyenv sh-deactivate --quiet || true)" || true
  else
    eval "$(pyenv sh-activate --quiet || true)" || true
  fi
  return $ret
};
if ! [[ "$PROMPT_COMMAND" =~ _pyenv_virtualenv_hook ]]; then
  PROMPT_COMMAND="_pyenv_virtualenv_hook;$PROMPT_COMMAND";
fi
```

*NOTE:*On a second debian laptop, the above was not printed.  I ran into problems with that laptop.
Originally I thought it was the eb cli setup scripts since it installed and configured pyenv
for me using hardcoded scripts.  Yes, that was a problem.  However, the problem was compounded
by the realpython.com scripts only providing the `init -` command.  Looking at the
source for bash on debian you see it does both as I do in the updated setenv.sh script.
Also later in that guide in the advanced section it says its a must have and goes into what
its doing. 
[See this in part i - "This is the only requirement for pyenv to funciton properly"](https://github.com/pyenv/pyenv#advanced-configuration)


