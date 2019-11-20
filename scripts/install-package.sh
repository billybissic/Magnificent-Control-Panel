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


## Purpose : Preps server for package by creating back ups and removing files,
##           then installs the package specified in the arguments.

ME="install-package.sh"
showHelp() {
    echo " "
    echo "HELP"
    echo "---------------------------------------------------------------------"
    echo "Available Commands: "
    echo "---------------------------------------------------------------------"
    echo " Basic use ./${ME} -m install -f [PACKAGENAME.BUILD.#.#] -r [RELEASE_NUMBER] -d [INSTALL_PATH] -l [PACKAGE_STAGE_PATH]"
    echo "-h : Shows this help document."
    echo "-v : Optional, Allows verbose output during script runtime."
    echo "MODES: -i, -b, -p, one of the three are required. See below for details."
    echo "-m : Sets the installer to install mode. Runs back up then installs the specified package."
    echo "     Options are: install, backup, rollback."
    echo "-b : Sets the installer to back up applications in production."
    echo "     Explicitly running this mode will just perform a backup."
    echo "     This gets called automatically under the install mode."
    echo "-p : Sets the installer to roll back to a previous release."
    echo "-d : Required, Sets the install destination directory."
    echo "-l : Required, Staging location for the installation package."
    echo "-f : Required, Sets name of the package to install."
    echo "-r : Required, Sets build revision number of the package to be installed."
    echo "-s : Optional, Sets the script run to silent, no possible output except errors"
    echo "     overrides verbose when used together."
    echo "----------------------------------------------------------------------"
}

# A POSIX variable
OPTIND=1   # Reset in case getopts has been used previously in the shell.

# Initialize our own variables:
BITBUCKET_BUILD_NUMBER=""
BB_AUTH_STRING=""
#BITBUCKET_REPO_OWNER=""
#BITBUCKET_REPO_SLUG=""
BUILD_NAME=""
BACKUP_DIRECTORY=""
INSTALL_DIRECTORY=""
STAGING_LOCATION=""
VERBOSE=0
INSTALL=0
SILENT=0
BACKUP=0
PREVIOUS=0

while getopts ":h:v:m:b:p:f:r:d:l:q:" opt; do
  case "${opt}" in
  h|\?)
       showHelp
       exit 0
       ;;
  v)   VERBOSE=1
       ;;
  m)   if [${OPTARG} -eq "install" ]
       then
       INSTALL=1
       elif [ ${OPTARG} -eq "backup" ]
       then
       BACKUP=1
       elif [ ${OPTARG} -eq "rollback" ]
       then
       PREVIOUS=1
       fi
       ;;
  b)   BACKUP=1
       ;;
  p)   PREVIOUS=1
       ;;
  #o)   BITBUCKET_REPO_OWNER=${OPTARG}
  #     ;;
  f)   BUILD_NAME=${OPTARG}
       ;;
  r)   BITBUCKET_BUILD_NUMBER=${OPTARG}
       ;;
  d)   INSTALL_DIRECTORY=${OPTARG} # directory in which the contents of the package will be installed to.
       ;;
  l)   STAGING_LOCATION=${OPTARG} # can be used to specify staging area for the new package or backup location for the package to rollback to.
       ;;
  #s)   BITBUCKET_REPO_SLUG=${OPTARG}
  #     ;;
  q)   SILENT=1
       ;;
  esac
done

shift $((OPTIND-1))

[ "${1:-}" = "--" ] && shift

echo "verbose=${VERBOSE}, build_name="${BUILD_NAME}" build_number='${BITBUCKET_BUILD_NUMBER}', Leftovers: $@"

BACKUP_ARCHIVE_NAME=""

backupFiles() {

  if [ ! -d $BACKUP_DIRECTORY ]
  then
    mkdir $BACKUP_DIRECTORY
    if [ $? -eq 1 ]
    then
      echo "[ERROR] ${ME} Not able to create ${BACKUP_DIRECTORY}; can not proceed."
      echo "[INFO] Exiting..."
      exit 1
    fi
  fi

  cd $INSTALL_DIRECTORY

  cp *.ico $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to copy icon files to ${BACKUP_DIRECTORY}; can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  cp *.html $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to copy html files to ${BACKUP_DIRECTORY}; can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  cp *.js $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to copy js files to ${BACKUP_DIRECTORY}; can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  cp *.css $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to copy css files to ${BACKUP_DIRECTORY}; can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  cp -R assets/ $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to copy assets directory to ${BACKUP_DIRECTORY}; can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  cd $BACKUP_DIRECTORY

  cd ..

  # If there were no errors copying, tar up the files
  tar -xvzf $BACKUP_ARCHIVE_NAME $BACKUP_DIRECTORY
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} Not able to compress back up directory to archive. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  echo "[INFO] All files backed up successfully. Removing old files now..."

  # If there were no errors compressing the files, remove the files
  rm *.ico
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} not able to remove icon files. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  rm *.html
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} not able to remove html files. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  rm *.js
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} not able to remove js files. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  rm *.css
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} not able to remove css files. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi

  rm -rf assets/
  if [ $? -eq 1 ]
  then
    echo "[ERROR] ${ME} not able to remove assets directory. Can not proceed."
    echo "[INFO] Exiting..."
    exit 1
  fi
}

installFiles() {

echo "[INFO] Copying files to the install directory."

# cd to package contents
cd $STAGING_LOCATION
if [ $? -eq 1 ]
then
  echo "[ERROR] ${ME} The staging directory ${STAGING_LOCATION} does not exist. Can not proceed."
  echo "[INFO] Exiting..."
  exit 1
fi

cp * "${INSTALL_DIRECTORY}"
if [ $? -eq 1 ]
then
  echo "[ERROR] ${ME} Was not able to move files over to the installation directory ${INSTALL_DIRECTORY}. Can not proceed."
  echo "[INFO] Exiting..."
  exit 1
fi

chgrp -R www-data *
chown -R www-data *
}

rollBackInstall() {
echo "[INFO] Beginning rollback"
}

# Check to ensure the required flags are passed in.
if [ -z ${BUILD_NAME:+x} ]
then
   echo " "
   echo "[ERROR] ${ME} Package name is required."
   showHelp
   echo " "
   echo "[INFO] Exiting..."
   exit 1
fi

if [ -z ${INSTALL_DIRECTORY:+x} ]
then
  echo " "
  echo "[ERROR] ${ME} Install directory is required."
  showHelp
  echo " "
  echo "[INFO] Exiting..."
  exit 1
fi

if [ -z ${STAGING_LOCATION:+x} ]
then
  echo " "
  echo "[ERROR] ${ME} Staging location is required."
  showHelp
  echo " "
  echo "[INFO] Exiting..."
  exit 1
fi

if [ -z ${BITBUCKET_BUILD_NUMBER:+x} ]
then
  echo " "
  echo "[ERROR] ${ME} Build number is required."
  showHelp
  echo " "
  echo "[INFO] Exiting..."
  exit 1
fi

if [ $INSTALL -eq 1 ]
then
backupFiles
installFiles
fi

if [ $BACKUP -eq 1 ]
then
backupFiles
fi

if [ $PREVIOUS -eq 1 ]
then
rollBackInstall
fi

