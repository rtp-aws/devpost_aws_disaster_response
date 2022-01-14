# set the default goal.
.DEFAULT_GOAL := list_docs
#.phony: list_docs gitupdate clean



list_docs:
	ls -l



gitupdate:
	git add .; git commit -m "update docs dir"; git push

clean:
	echo "docs: make clean"
	#-find . -name "*.backup" -print | xargs rm
	-rm "*.backup"
