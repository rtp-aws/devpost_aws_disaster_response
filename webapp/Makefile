# set the default goal.
.DEFAULT_GOAL := activate
#.phony: list_images gitupdate clean $(DIRS)



list_files:
	ls -l

activate:
	@echo ". ./setenv.sh; pyenv activate devpost"

gitupdate: clean
	git add .; git commit -m "webapp"; git push

clean:
	-rm  *.backup *.BACKUP *.key *.swp
