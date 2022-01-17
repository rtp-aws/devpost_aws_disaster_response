# set the default goal.
.DEFAULT_GOAL := list_files
#.phony: list_images gitupdate clean $(DIRS)



list_files:
	ls -l



TOPTARGETS := all clean

SUBDIRS := keys
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
	git add .; git commit -m "secrets"; git push

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
clean:
	-rm  *.backup *.BACKUP *.key *.swp
