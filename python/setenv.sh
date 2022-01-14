
# from pyenv setup
export PATH="$HOME/.pyenv/bin:$PATH"

# I had problems on the other laptop.  To fix it I had to go back to 
# the pyenv github
# sets up your shims path.
eval "$(pyenv init --path)"
# sets up autocompletion
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# from eb setup scripts
# this needs to be adjusted. Its a hack from those eb cli scripts
#export PATH=/home/davis/.ebcli-virtual-env/executables:$PATH
#export PATH=/home/davis/.pyenv/versions/3.7.2/bin:$PATH

