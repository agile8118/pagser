#!/bin/bash

# First run chmod +x get-logs.sh
rm -rf ~/Downloads/pagser-logs
mkdir ~/Downloads/pagser-logs
scp -r -i ~/.ssh/aws-main.pem ec2-user@ec2-35-153-33-197.compute-1.amazonaws.com:pagser/logs ~/Downloads/pagser-logs/server-1/
