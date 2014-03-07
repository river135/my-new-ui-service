#!/bin/bash

PROJ_DIR=`pwd`
failInstall=false

##
#
#
# Install message/instructions for project dependencies
#
function installMessage(){
  local logHeader=$1
  local forName=$2
  local message=""

  case $forName in
    NPM)
      message="To install NPM, open a terminal window and run 'brew install node'."
      ;;
  esac

  echo "$logHeader $message"
}

##
# METHOD: confirmInstallation
#
# Check if binaries are installed, if not fail out of install
#
function confirmInstallation(){
  local currentVersionString=$1
  local forName=$2
  local logHeader="[$forName Installation]: "

  if [[ -n $currentVersionString ]]; then
    echo "$logHeader G2G."
  else
    installMessage "$logHeader" "$forName"
    failInstall=true
  fi
}

##
# METHOD: addNpmBinPathIfNeeded
#
# Check path var and add the npm bin path if needed (to run bower install)
#
function addNpmBinPathIfNeeded(){
  case ":$PATH:" in
    *:/usr/local/share/npm/bin:*)
      echo "NPM bin is already in your path."
    ;;
    *)
      echo "Exporting path for npm bin, please add '/usr/local/share/npm/bin' to your bash profile."
      export PATH=$PATH:/usr/local/share/npm/bin
    ;;
  esac
}

##
# METHOD: performInstallationIfNecessary
#
# Install necessary packages if needed
#
function performInstallationIfNecessary(){
  local currentVersionString=$1
  local forName=$2
  local installationCommand=$3
  local logHeader="[$forName Installation]: "

  if [[ -n $currentVersionString ]]; then
    echo "$logHeader G2G."
  else
    echo "$logHeader Installing. You may need to enter your sudo password."
    `eval $installationCommand`
    addNpmBinPathIfNeeded
  fi

}

##
# METHOD: checkForFailures
#
# Abort the install if any necessary dependencies are found missing. This is in a method to show
# missing dependencies at once.
#
function checkForFailures(){
  local fail=$1
  if [ "$fail" == true ]
    then
      echo "Aborting Install, please install the above dependencies."
      exit
  fi
}

#---===[ START INSTALL ]===---
#
#---===[ Look at required installations first
echo
confirmInstallation "`npm -v`"    "NPM"

#---===[ Abort install if required binaries do not exist
checkForFailures "$failInstall"

#---===[ Install other necessary packages using above dependencies
performInstallationIfNecessary "`bower -v`" "Bower" "sudo npm install -g bower"
performInstallationIfNecessary "`karma --version`" "Karma" "sudo npm install -g karma-jasmine"
performInstallationIfNecessary "`sudo phantomjs -v`" "PhantomJS" "sudo npm install -g phantomjs"

#---===[ Install all project dependencies based on bower.json
cd web-ui/src/main/resources
echo `bower install`

#---===[ Generate IntelliJ Project
cd $PROJ_DIR
./generateIdeaProject.sh
