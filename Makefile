# http://www.gnu.org/software/make/manual/make.html#Special-Variables

# set the default goal.
.DEFAULT_GOAL := deploy
.phony: deploy gitupdate clean $(DIRS)


DIRS = bin docs matlab R
BUCKET = some-bucket


gitupdate:
	git add --all; git commit -m "wip"; git push


# aws s3 command for rsync. hopefully exclude can be added twice
deploy:
	echo deploy to $(BUCKET)
	#aws s3 sync ${BUCKET}/. s3://rtp-aws.org --exclude "*.swp" --exclude "*.key"



clean:$(DIRS)
	-rm -i *.backup
	$(MAKE) -C $<
