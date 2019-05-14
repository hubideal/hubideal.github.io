.PHONY: enhanced boilerplate

enhanced: 
	curl -Lk https://github.com/krwarner/research-blog-starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv research-blog-starter-master/* .
	mv research-blog-starter-master/.babelrc .
	mv research-blog-starter-master/.gitignore .
	mv research-blog-starter-master/.eslintrc.json .
	rm -rf temp.zip starter-master Makefile boilerplate docs
	rm src/css/boilerplate*
	rm src/css/style-guide.styl
	rm src/html/style-guide.hbs
	rm README.md
	mv README.story.md README.md
	mv Makefile.story Makefile
	npm i
	rm package-lock.json

boilerplate: 
	curl -Lk https://github.com/krwarner/research-blog-starter/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv research-blog-starter-master/boilerplate/* .
	rm -rf temp.zip research-blog-starter-master Makefile boilerplate style-guide
