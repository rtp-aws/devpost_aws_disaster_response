

# notes on gpg usage

These are notes on how to encrypt key files

# Create a key
`gpg --gen-key`

# Create a public key for someone to use
`gpg --armor --output mypubkey.gpg --export davisjf@gmail.com`

# Encrypt a file named testy.txt
`gpg --output testy.txt.gpg --encrypt --recipient davisjf@gmail.com testy.txt`

# Decrypt a file named testy.txt.gpg
`gpg --output test.txt --decrypt test.txt.gpg`

# How to export your key
* list keys to get ID
`gpg --list-secret-keys davisjf@gmail.com`
*  export the key
`gpg --export-secret-keys YOUR_ID_HERE > private.key`
* import the key on a second computer
`gpg --import private.key`




