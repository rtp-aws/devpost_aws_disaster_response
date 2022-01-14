# set the default goal.
.DEFAULT_GOAL := list_docs
.phony: list_docs gitupdate clean $(DIRS)



list_docs:
	ls -l





gitupdate:
	git add .; git commit -m "update docs dir"; git push

clean:$(DIRS)
	-rm -i *.backup
