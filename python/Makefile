# set the default goal.
.DEFAULT_GOAL := list_files
#.phony: list_images gitupdate clean $(DIRS)



list_files:
	ls -l

convolution:
	python convolution.py

gitupdate:
	git add .; git commit -m "update python"; git push

clean:
	-rm  *.backup
