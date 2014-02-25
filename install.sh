#!/bin/bash

PROJ_DIR=`pwd`
failInstall=false

function installMessage(){
  local logHeader=$1
  local forName=$2
  local message=""

  case $forName in
    Ruby)
      message="Go the the following URL for Ruby install instructions: https://confluence.loyal3.com/display/L3/Engineering+Setup+Instructions#EngineeringSetupInstructions-RubywithRVMSetup"
      ;;
    Bundler)
      message="To install Bundler, open a new terminal window and run 'gem install bundler'."
      ;;
    NPM)
      message="To install NPM, open a terminal window and run 'brew install node'."
      ;;
    Bower)
      message="To install Bower, open a terminal window andrun 'npm install -g bower'."
      ;;
  esac

  echo "$logHeader $message"
}

function confirmInstallation(){
  local currentVersionString=$1
  local forName=$2
  local logHeader="[$forName Installation]: "

  echo -n $installMessageHeader
  if [[ -n $currentVersionString ]]; then
    echo "$logHeader G2G."
  else
    installMessage "$logHeader" "$forName"
    failInstall=true
  fi
}

function checkForFailures(){
  local fail=$1
  if [ "$fail" == true ]
    then
      echo "Aborting Install, please install the above dependencies."
      exit
  fi
}

function installBootstrapSass(){
  echo "[Bootstrap SASS]: Moving bower installed files to scss/vendors/bootstrap."
  echo `rsync -r --exclude=bootstrap.scss public/lib/bootstrap-sass/vendor/assets/stylesheets/bootstrap/. public/css/scss/vendors/bootstrap`
  echo "[Bootstrap SASS]: Uninstalling bowers install of bootstrap-sass."
  `bower uninstall bootstrap-sass`
}

echo
confirmInstallation "`ruby -v`"   "Ruby"
confirmInstallation "`bundle -v`" "Bundler"
confirmInstallation "`npm -v`"    "NPM"
confirmInstallation "`bower -v`"  "Bower"
checkForFailures "$failInstall"
echo
cd web-ui
echo `bundle install`
cd src/main/resources
echo `bower install`
installBootstrapSass
cd public/css/scss/vendors
echo `bourbon install`
echo `neat install`
cd $PROJ_DIR
#echo `./generateIdeaProject.sh`
