#!/bin/bash

set -e

FTP_HOST=$1
FTP_USERNAME=$2
FTP_PASSWORD=$3
LOCAL_DIR=$4
REMOTE_DIR=$5


# Print debug information
echo "FTP_HOST: $FTP_HOST"
echo "FTP_USERNAME: $FTP_USERNAME"
echo "LOCAL_DIR: $LOCAL_DIR"
echo "REMOTE_DIR: $REMOTE_DIR"

lftp -d -c "
set ssl:verify-certificate no;
set ftp:passive-mode yes;
open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST;
mirror -R --verbose --only-newer --parallel=10 \
 $LOCAL_DIR $REMOTE_DIR;
  bye;
"
