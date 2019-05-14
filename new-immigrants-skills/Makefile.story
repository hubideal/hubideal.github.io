PHONY: github

github:
	rm -r docs
	cp -r dev/ docs
	git add -A
	git commit -m "update dev version"
	git push

archive:
	zip -r archive.zip dev

# aws-assets:
# 	aws s3 sync dist s3://<Enter URL here> --delete --cache-control 'max-age=31536000' --exclude 'index.html' --exclude 'bundle.js'

# aws-htmljs:
# 	aws s3 cp dist/index.html s3://<Enter URL here>
# 	aws s3 cp dist/bundle.js s3://<Enter URL here>

# aws-cache:
# 	aws cloudfront create-invalidation --distribution-id <Enter ID here> --paths '<Enter path here>'	

# nae: aws-assets aws-htmljs aws-cache archive
