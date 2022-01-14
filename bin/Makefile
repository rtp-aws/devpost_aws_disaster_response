# http://www.gnu.org/software/make/manual/make.html#Special-Variables

# set the default goal.
.DEFAULT_GOAL := fetch_new_images
.phony: fetch_new_images gitupdate clean $(DIRS)





fetch_new_images:
	./scan_cameras.sh



gitupdate:
	git add --all; git commit -m "wip"; git push

clean:$(DIRS)
	-rm -i *.backup
