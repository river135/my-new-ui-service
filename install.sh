#!/bin/bash

PROJ_DIR=`pwd`

function confirmInstallation(){
  local currentVersionString=$1
  local forName=$2
  echo -n "[Checking $forName Installation]: "
  if [[ -n "$currentVersionString" ]]; then
    echo "G2G."
  else
    echo "False. Aborting project install, please install $forName."
    exit
  fi
}

echo
confirmInstallation "`ruby -v`" "Ruby"
confirmInstallation "`bundle -v`" "Bundler"
confirmInstallation "`npm -v`" "NPM"
confirmInstallation "`bower -v`" "Bower"
echo
cd web-ui
echo `bundle install`
cd src/main/resources
echo `bower install`
cd public/css/scss/vendors
echo `bourbon install`
echo `neat install`
cd $PROJ_DIR

