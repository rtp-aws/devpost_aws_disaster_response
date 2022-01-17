public/js/bundle.js: public/js/script.js
	browserify public/js/script.js -o public/js/bundle.js


runlocal: public/js/bundle.js
	npm run devStart

deploy: public/js/bundle.js gitupdate
	eb deploy


gitupdate:
	git add .; git commit -m "mvprc1"; git push

