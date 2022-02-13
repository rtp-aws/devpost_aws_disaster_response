## ssh notes for aws

```
chmod 400  /home/youruser/keypair.pem
ssh -i /path/to/your/keypair.pem user@server-ip

ssh -i junkkeypair.pem ec2-user@18.236.132.36

curl -w "\n" http://169.254.169.254/latest/meta-data/

curl -w "\n" http://169.254.169.254/latest/meta-data/security-groups
curl -w "\n" http://169.254.169.254/latest/meta-data/ami-id
curl -w "\n" http://169.254.169.254/latest/meta-data/hostname
curl -w "\n" http://169.254.169.254/latest/meta-data/instance-id
curl -w "\n" http://169.254.169.254/latest/meta-data/instance-type
curl -w "\n" http://169.254.169.254/latest/meta-data/public-keys/0/openssh-key

In this Lab Step, you learned how you can obtain instance metadata. This metadata can be extremely useful if you want to automate the setup of new instances.


##############

# to remember your passphrase

ssh-agent bash
ssh-add ~/.ssh/id_rsa

```

