
SRC:= public/js/road.js public/js/bridge.js public/js/odd.js \
	 public/js/both.js public/js/predict.js public/js/predict1.js

EXE:= public/js/road_bundle.js public/js/bridge_bundle.js \
	public/js/odd_bundle.js public/js/both_bundle.js  \
	public/js/predict_bundle.js public/js/predict1_bundle.js


# TODO use implicit rule
all: $(EXE)

public/js/predict1_bundle.js: public/js/predict1.js
		echo "running browserify on predict1 ..."
		browserify $< -o $@

public/js/predict_bundle.js: public/js/predict.js
		echo "running browserify on predict ..."
		browserify $< -o $@

public/js/bridge_bundle.js: public/js/bridge.js
		echo "running browserify on bridge ..."
		browserify $< -o $@

public/js/road_bundle.js: public/js/road.js
		echo "running browserify on road ..."
		browserify $< -o $@

public/js/both_bundle.js: public/js/both.js
		echo "running browserify on both ..."
		browserify $< -o $@

public/js/odd_bundle.js: public/js/odd.js
		echo "running browserify on odd ..."
		browserify $< -o $@


runlocal: $(EXE)
	echo "running runlocal ..."
	npm run devStart

deploy: $(EXE) gitupdate
	echo "running deploy ..."
	eb deploy


gitupdate:
	echo "running gitupdate ..."
	git add .; git commit -m "mvprc1"; git push


clean:
	echo "running clean"
	-rm $(EXE)
