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

sbt test

if [ "$?" -ne 0 ]; then
    echo "one or more tests failed";
    exit 1;
fi
