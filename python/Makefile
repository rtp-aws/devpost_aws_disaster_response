# set the default goal.
.DEFAULT_GOAL := list_files
#.phony: list_images gitupdate clean $(DIRS)



list_files:
	ls -l


gitupdate:
	git add .; git commit -m "update imgs"; git push

clean:
	-rm -i *.backup
