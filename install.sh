#!/bin/bash

PROJ_DIR=`pwd`
failInstall=false

function installMessage(){
  local logHeader=$1
  local forName=$2
  local message=""

  case $forName in
    Ruby)
      echo "$logHeader Go the the following URL for Ruby install instructions: https://confluence.loyal3.com/display/L3/Engineering+Setup+Instructions#EngineeringSetupInstructions-RubywithRVMSetup"
      ;;
    Bundler)
      echo "$logHeader To install Bundler, open a new terminal window and run 'gem install bundler'."
      ;;
    NPM)
      echo "$logHeader To install NPM, open a terminal window and run 'brew install node'."
      ;;
    Bower)
      echo "$logHeader Installing bower via NPM..."
      echo `sudo npm install -g bower`
      ;;
  esac
}

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

function performInstallationIfNecessary(){
  local currentVersionString=$1
  local forName=$2
  local installationCommand=$3
  local logHeader="[$forName Installation]: "

  if [[ -n $currentVersionString ]]; then
    echo "$logHeader G2G."
  else
    echo "$logHeader Installing.."
    echo eval $installationCommand
    addNpmBinPathIfNeeded
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

# Move the bootstrap scss files to the vendors path because we are using bootstrap as a mixin library, not bootstrap.css
function installBootstrapSass(){
  echo "[Bootstrap SASS]: Moving bower installed files to scss/vendors/bootstrap."
  echo `rsync -r --exclude=bootstrap.scss app/lib/bootstrap-sass/vendor/assets/stylesheets/bootstrap/. app/css/scss/vendors/bootstrap`
  echo "[Bootstrap SASS]: Uninstalling bowers install of bootstrap-sass."
  `bower uninstall bootstrap-sass`
}

#---===[ Look at required installations first
echo
confirmInstallation "`ruby -v`"   "Ruby"
confirmInstallation "`bundle -v`" "Bundler"
confirmInstallation "`npm -v`"    "NPM"

#---===[ Abort install if required binaries do not exist
checkForFailures "$failInstall"

#---===[ Install other necessary packages using above dependencies
performInstallationIfNecessary "`bower -v`" "Bower" "sudo npm install -g bower"
performInstallationIfNecessary "`karma -v`" "Bower" "sudo npm install -g karma-jasmine"

#---===[ Bundle install
echo
cd web-ui
echo `bundle install`

#---===[ Install all project dependencies based on bower.json
cd src/main/resources
echo `bower install`
installBootstrapSass

#---===[ Install/Create paths for bourbon and neat
cd app/css/scss/vendors
echo `bourbon install`
echo `neat install`

cd $PROJ_DIR

#---===[ Generate IntelliJ Project
#echo `./generateIdeaProject.sh`
