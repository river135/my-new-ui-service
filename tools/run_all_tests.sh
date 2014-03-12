#!/bin/bash

#
# Runs unit tests, integration tests and functional tests for all (currently known) projects
#
# Usage: run_all_tests
#

# Configure sbt to print mono text only
shopt -s expand_aliases

echo Run all unit tests, integration tests and functional tests

export PATH=$PATH:/usr/local/bin

echo $PATH

sbt project\ config test\
 project\ util test\
 project\ web-ui test\
 project\ web-ui-integration-tests test\
 project\ web-ui-functional-tests test\
 project\ web-service test\
 project\ web-service-integration-tests test\
 project\ web-service-functional-tests test\

if [ "$?" -ne 0 ]; then
    echo "one or more tests failed";
    exit 1;
fi
