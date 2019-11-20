#!/bin/bash
###########
#
# MIT License
#
# Copyright (c) 2018 Billy Bissic
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#
############

## Purpose : To perform packaging for node/angular projects.
ME="package-build.sh"

showHelp() {
    echo " "
    echo "HELP"
    echo "---------------------------------------------------------------------"
    echo "Available Commands: "
    echo "---------------------------------------------------------------------"
    echo " Basic use ./${ME} -f [BUILD_NAME] -r [BUILD_REVISION_NUMBER] -d [DIST_DIRECTORY]"
    echo "-h : Shows this help document."
    echo "-v : Optional, Allows verbose output during script runtime."
    echo "-f : Required, Sets output package file name."
    echo "-r : Required, Sets build revision number used in naming the package."
    echo "-s : Optional, Sets the script run to silent, no possible output except errors"
    echo "     overrides verbose when used together."
    echo "----------------------------------------------------------------------"
}

# A POSIX variable
OPTIND=1   # Reset in case getopts has been used previously in the shell.

DIST_DIRECTORY=""
BUILD_NAME=""
BITBUCKET_BUILD_NUMBER=""
VERBOSE=0
SILENT=0

while getopts ":h:v:f:r:d:s:" opt; do
  case "${opt}" in
  h|\?)
       showHelp
       exit 0
       ;;
  v)   VERBOSE=1
       ;;
  f)   BUILD_NAME=${OPTARG}
       ;;
  r)   BITBUCKET_BUILD_NUMBER=${OPTARG}
       ;;
  d)   DIST_DIRECTORY=${OPTARG}
       ;;
  s)   SILENT=1
       ;;
  esac
done

shift $((OPTIND-1))

[ "${1:-}" = "--" ] && shift

echo "verbose=${VERBOSE}, BUILD_NAME='${BUILD_NAME}' build_number='${BITBUCKET_BUILD_NUMBER}', dist_directory='${DIST_DIRECTORY}' Leftovers: $@"

#Checking for the empty variables

if [ -z ${BUILD_NAME:+x} ]
then
   echo " "
   echo "[ERROR] ${ME}: Build name is required, but missing."
   showHelp
   echo " "
   echo "[INFO] Exiting..."
   exit 1
fi

if [ -z ${BITBUCKET_BUILD_NUMBER:+x} ]
then
   echo " "
   echo "[ERROR] ${ME}: Bitbucket Build Number is required, but missing."
   showHelp
   echo " "
   echo "[INFO] Exiting..."
   exit 1
fi

if [ -z ${DIST_DIRECTORY:+x} ]
then
   echo " "
   echo "[ERROR] ${ME}: Angular Dist folder is required, but missing."
   showHelp
   echo " "
   echo "[INFO] Exiting..."
   exit 1
fi

PACKAGE_DIRECTORY="${BUILD_NAME}.${BITBUCKET_BUILD_NUMBER}"
PACKAGE_NAME="${BUILD_NAME}.${BITBUCKET_BUILD_NUMBER}.tar.gz"

packageBuild() {

PACKAGE_PATH=`pwd`
echo "Package path at script start: ${PACKAGE_PATH}"

PACKAGE_PATH="${PACKAGE_PATH}/${PACKAGE_DIRECTORY}"
echo "Full path to package directory: ${PACKAGE_PATH}"

echo "[INFO] Beginning to make directory, ${PACKAGE_DIRECTORY}"
mkdir "${PACKAGE_DIRECTORY}"

if [ $? -eq 1 ]
then
   echo "[ERROR] Not able to make directory ${PACKAGE_DIRECTORY}"
   echo "[INFO] Exiting..."
   exit 1
fi

echo "Done."

echo "[INFO] Beginning to copy files"
ls -la
#cd $PACKAGE_PATH
#ls -la
#cd ..
echo "[INFO] Copying scripts directory."
ls -la
cp scripts/* $PACKAGE_PATH
echo "[INFO] Copying site files"
cd $DIST_DIRECTORY
ls -la
cp -R * $PACKAGE_PATH


if [ $? -eq 1 ]
then
   echo "[ERROR] Not able to copy files from ${DIST_DIRECTORY}, to ${PACKAGE_PATH}"
   echo "[INFO] Exiting..."
   exit 1
fi

echo "[INFO] Done."


echo "[INFO] Beginning to archive package"
cd $PACKAGE_PATH
echo "[INFO] In `pwd`"
ls -la
cd ..
echo "Change Directory 1"
ls -la
cd scripts
echo "Change Directory 2"
ls -la
echo "Change Directory 3"
cd ..
ls -la
tar -zcvf $PACKAGE_NAME $PACKAGE_DIRECTORY
ls -la

if [ $? -eq 1 ]
then
   echo "[ERROR] Not able to compress package"
   echco "[INFO] Exiting..."
   exit 1
else
   echo "[INFO] Successfully created the package file"
fi

echo "[INFO] Done."
}

#call packageBuild function
echo "[INFO] Beginning to package web build."
packageBuild
echo "[INFO] Done."
