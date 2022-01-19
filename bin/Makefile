# http://www.gnu.org/software/make/manual/make.html#Special-Variables

# set the default goal.
.DEFAULT_GOAL := list_files
#.phony: list_files fetch_new_images gitupdate clean $(DIRS)



list_files:
	ls -l



fetch_new_images:
	./scan_cameras.sh


gitupdate:
	./find_dupes.sh
	git add .; git commit -m "update bin dir"; git push

clean:
	echo "bin: make clean"
	-rm -i *.backup
