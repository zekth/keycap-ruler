#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git add -f $1
git commit -m "Publish To GH page"
git push origin master
git subtree push --prefix $1 origin gh-pages
