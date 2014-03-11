# copy the pre-commit script into .git/hooks local folder
cp ./tools/git-hooks/pre-commit ./.git/hooks
chmod a+x ./.git/hooks/pre-commit

sbt 'gen-idea no-fsc'
echo
echo "Generated Intellij Idea Project."

