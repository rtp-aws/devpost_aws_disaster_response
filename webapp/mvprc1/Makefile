public/js/bundle.js: public/js/script.js
	echo "running browserify ..."
	browserify public/js/script.js -o public/js/bundle.js


runlocal: public/js/bundle.js
	echo "running runlocal ..."
	npm run devStart

deploy: public/js/bundle.js gitupdate
	echo "running deploy ..."
	eb deploy


gitupdate:
	echo "running gitupdate ..."
	git add .; git commit -m "mvprc1"; git push
