#!/bin/bash
export PATH="$PATH:/home/ec2-user/.nvm/versions/node/v12.18.3/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/ec2-user/.local/bin:/home/ec2-user/bin"

echo Installing the dependencies
cd /home/ec2-user/pagher/
npm install

echo Starting the app
pm2 start /home/ec2-user/pagher/ecosystem.config.js
