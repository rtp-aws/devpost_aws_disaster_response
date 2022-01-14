.DEFAULT_GOAL := convolution
.phony: convolution gitupdate clean $(DIRS)





# aws s3 command for rsync. hopefully exclude can be added twice
convolution:
	octave convolution_api.m


gitupdate:
	git add .; git commit -m "wip"; git push

clean:$(DIRS)
	-rm -i *.backup
