# http://www.gnu.org/software/make/manual/make.html#Special-Variables

# set the default goal.
.DEFAULT_GOAL := list_files
.phony: list_files fetch_new_images gitupdate clean $(DIRS)



list_files:
	ls -l




fetch_new_images:
	./scan_cameras.sh



gitupdate:
	git add .; git commit -m "wip"; git push

clean:$(DIRS)
	-rm -i *.backup
