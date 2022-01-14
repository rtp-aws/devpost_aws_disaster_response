# http://www.gnu.org/software/make/manual/make.html#Special-Variables
# Query the default goal.
ifeq ($(.DEFAULT_GOAL),)
  $(warning no default goal is set)
endif
# Reset the default goal.
.DEFAULT_GOAL := deploy



.phony: deploy gitupdate clean $(DIRS)


DIRS = bin docs matlab R



BUCKET = some-bucket

# aws s3 command for rsync. hopefully exclude can be added twice
deploy:
	echo deploy to $(BUCKET)
	#aws s3 sync ${BUCKET}/. s3://rtp-aws.org --exclude "*.swp" --exclude "*.key"


gitupdate:
	git add --all; git commit -m "wip"; git push

clean:$(DIRS)
	-rm -i *.backup
	$(MAKE) -C $<
