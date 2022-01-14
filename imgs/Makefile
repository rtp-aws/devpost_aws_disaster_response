# set the default goal.
.DEFAULT_GOAL := list_images
#.phony: list_images gitupdate clean $(DIRS)



list_images:
	ls -l


gitupdate:
	git add .; git commit -m "update imgs"; git push

clean:
	-rm -i *.backup
