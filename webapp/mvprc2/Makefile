
SRC:= 
	

EXE:= 




# TODO use implicit rule
all: $(EXE)



runlocal: $(EXE)
	echo "running runlocal ..."
	npm run devStart

deploy: $(EXE) gitupdate
	echo "running deploy ..."
	eb deploy


gitupdate:
	echo "running gitupdate ..."
	git add .; git commit -m "mvprc2"; git push


clean:
	echo "running clean"
	#-rm $(EXE)
