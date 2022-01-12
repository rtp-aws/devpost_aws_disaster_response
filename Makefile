.phony: deploy gitupdate


BUCKET = some-bucket

# aws s3 command for rsync. hopefully exclude can be added twice
deploy:
	echo deploy to $(BUCKET)
	#aws s3 sync ${BUCKET}/. s3://rtp-aws.org --exclude "*.swp" --exclude "*.key"


gitupdate:
	git add --all; git commit -m "wip"; git push

