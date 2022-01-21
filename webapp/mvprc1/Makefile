
#SRC:= public/js/road.js public/js/bridge.js public/js/odd.js

#public/js/bundle.js: $(SRC)
#	echo "running browserify ..."
#	browserify $(SRC) -o public/js/bundle.js

# TODO change to makefile vars
all: public/js/bridge_bundle.js public/js/road_bundle.js public/js/odd_bundle.js

public/js/bridge_bundle.js: $(SRC)
		echo "running browserify on bridge ..."
		browserify public/js/bridge.js -o public/js/bridge_bundle.js

public/js/road_bundle.js: $(SRC)
		echo "running browserify on road ..."
		browserify public/js/road.js  -o public/js/road_bundle.js

public/js/odd_bundle.js: $(SRC)
		echo "running browserify on odd ..."
		browserify public/js/odd.js  -o public/js/odd_bundle.js



runlocal: public/js/bridge_bundle.js public/js/road_bundle.js public/js/odd_bundle.js
	echo "running runlocal ..."
	npm run devStart

deploy: public/js/bridge_bundle.js public/js/road_bundle.js public/js/odd_bundle.js gitupdate
	echo "running deploy ..."
	eb deploy


gitupdate:
	echo "running gitupdate ..."
	git add .; git commit -m "mvprc1"; git push
