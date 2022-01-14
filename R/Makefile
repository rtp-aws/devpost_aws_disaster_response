
.DEFAULT_GOAL := convolution
#.phony: convolution gitupdate clean $(DIRS)

#.phony: convolution



# R via command line is odd. You can use it or install
# some of the helper tools.  This is the old way to do it.
convolution:
	R CMD BATCH convolution.R ; cat convolution.Rout; rm convolution.Rout


gitupdate:
	git add --all; git commit -m "wip"; git push

clean:$(DIRS)
	-rm -i *.backup
