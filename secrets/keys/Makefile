


# set the default goal.
.DEFAULT_GOAL := list_docs
#.phony: list_docs gitupdate clean



list_docs:
	ls -l



gitupdate: clean
	git add .; git commit -m "update secrets/keys dir"; git push

clean:
	echo "docs: make clean"
	#-find . -name "*.backup" -print | xargs rm
	#-rm *.md
	-rm *.backup *.BACKUP *.swp *.key *.md



encrypt:
	gpg --output devpost-administrator.md.gpg --encrypt --recipient davisjf@gmail.com devpost-administrator.md
	gpg --output devpost-jfd.md.gpg --encrypt --recipient davisjf@gmail.com devpost-jfd.md



decrypt:
	gpg --decrypt devpost-administrator.md.gpg
	gpg --decrypt devpost-jfd.md.gpg

decrypt_tofile:
	gpg --output devpost-administrator.md --decrypt devpost-administrator.md.gpg
	gpg --output devpost-jfd.md --decrypt devpost-jfd.md.gpg
