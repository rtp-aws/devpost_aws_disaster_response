
SRC:= public/js/script.js public/js/bridge.js

public/js/bundle.js: $(SRC)
	echo "running browserify ..."
	browserify public/js/script.js public/js/bridge.js -o public/js/bundle.js


runlocal: public/js/bundle.js
	echo "running runlocal ..."
	npm run devStart

deploy: public/js/bundle.js gitupdate
	echo "running deploy ..."
	eb deploy


gitupdate:
	echo "running gitupdate ..."
	git add .; git commit -m "mvprc1"; git push
