#!/bin/bash

# First run chmod +x get-logs.sh
rm -rf ~/Downloads/pagher-logs
mkdir ~/Downloads/pagher-logs
scp -r -i ~/.ssh/aws-main.pem ec2-user@ec2-54-172-62-27.compute-1.amazonaws.com:pagher/logs ~/Downloads/pagher-logs/server-1/