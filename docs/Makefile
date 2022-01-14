# set the default goal.
.DEFAULT_GOAL := list_docs
.phony: fetch_new_images gitupdate clean $(DIRS)



list_docs:
	ls -l





gitupdate:
	git add --all; git commit -m "wip"; git push

	clean:$(DIRS)
		-rm -i *.backup
