# http://www.gnu.org/software/make/manual/make.html#Special-Variables

# set the default goal.
# I want the default to really just dump contents of dirs
# as a stub.  For instance, I don't want it to
# push code or
.DEFAULT_GOAL := deploy
#.phony: all deploy gitupdate clean $(DIRS)

TOPTARGETS := all clean

SUBDIRS := docs bin imgs python matlab R raw_data webapp secrets
#SUBDIRS := docs foo bin imgs python matlab R raw_data
#SUBDIRS := $(wildcard */.)
#BUCKET := some-bucket

$(TOPTARGETS): $(SUBDIRS)
$(SUBDIRS):
	echo "make arg is" $(MAKECMDGOALS)
	$(MAKE) -C $@ $(MAKECMDGOALS)

#.phony: $(TOPTARGETS) $(SUBDIRS)

deploy:
	echo do deploy stub

gitupdate: clean
	./bin/find_dupes.sh
	git add --all; git commit -m "wip"; git push

SUBCLEAN = $(addsuffix .clean,$(SUBDIRS))

clean: $(SUBCLEAN)

$(SUBCLEAN): %.clean:
#	echo "top: make clean"
#	echo "top: subdirs is $(SUBDIRS)"
#	echo "clean in top dir"
#	echo "first prereq "$<
#	echo "top: all prereqs "$?
#	echo "top: all prereqs " $(SUBDIRS)
#	make -C $? clean
	-rm *.backup *.swp *.BACKUP
	$(MAKE) -C $* clean


upload_raw:
	#aws s3 sync raw_data/. s3://icy-bridge-dataset --exclude "*.swp" --exclude "*.key"
	aws s3 sync raw_data/. s3://icy-bridge/raw_data_2 --exclude "*.swp" --exclude "*.key"
