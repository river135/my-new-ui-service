#!/bin/bash

function help(){
  echo "
    ---===[ HELP: Using go
    ---===[
    ---===[ OPTIONS:
    ---===[   gen-idea: Generates an IntelliJ Idea Project using the sbt plugin.
    ---===[   install : Prompts for information and provisions your service.
    ---===[   help    : This menu
    ---===[
  "
}

echo;
if [ -z "$1" ]
  then
    echo "You need to specify an action, type './go help' for a list of actions."
  else
    case $1 in
      install)
        ./tools/go-commands/install
        ;;
      gen-idea)
        ./tools/go-commands/gen-idea
        ;;
      help)
        help
        ;;
      *)
        echo "Unknown action, type './go help' for a list of actions."
        ;;
    esac
fi
