

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


# keyserver

https://keys.openpgp.org/about/usage

## Retrieving keys

To locate the key of a user, by email address:

```

FORM:
gpg --auto-key-locate keyserver --locate-keys user@example.net

$ gpg --auto-key-locate hkps://keys.openpgp.org --locate-keys davisjf@gmail.com

```

To refresh all your keys (e.g. new revocation certificates and subkeys):

```
gpg --refresh-keys
gpg --refresh-keys --keyserver pgp.mit.edu

```

### Uploading your key

Keys can be uploaded with GnuPG's --send-keys command, but identity information can't be verified that way to make the key searchable by email address (what does this mean?).

You can try this shortcut for uploading your key, which outputs a direct link to the verification page:

```
gpg --export your_address@example.net | curl -T - https://keys.openpgp.org
```

Alternatively, you can export them to a file and select that file in the upload page:

```
gpg --export your_address@example.net > my_key.pub
```

### Trusting keys

https://stackoverflow.com/questions/33361068/gnupg-there-is-no-assurance-this-key-belongs-to-the-named-user

#### Obtain the key-id

I'm not certain why this output is identical, but perhaps its because its mine.

```
$ gpg --list-secret-keys davisjf@gmail.com
sec   rsa3072 2022-01-01 [SC] [expires: 2024-01-01]
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
uid           [ultimate] John F. Davis <davisjf@gmail.com>
ssb   rsa3072 2022-01-01 [E] [expires: 2024-01-01]
```

```
$ gpg --list-public-keys davisjf@gmail.com
pub   rsa3072 2022-01-01 [SC] [expires: 2024-01-01]
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
uid           [ultimate] John F. Davis <davisjf@gmail.com>
sub   rsa3072 2022-01-01 [E] [expires: 2024-01-01]

```

The value for `XXXXX` above is what is used in `<KEY-ID> below.`

```
gpg --edit-key <KEY_ID>
gpg> trust
select value
gpg> quit
```

## send key to specific server

```
gpg --send-keys --keyserver pgp.mit.edu
```

## search a specific server 

```
gpg --keyserver pgp.mit.edu --search davisjf@gmail.com
```

## encrypt multiple receipeinets

```
gpg --output testy.txt.gpg --encrypt --recipient sedrick@10ronline.net --recipient davisjf@gmail.com testy.txt
```

