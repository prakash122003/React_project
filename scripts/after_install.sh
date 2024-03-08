#!/bin/bash

cd /var/www/html
#aws s3 cp s3://my-deployment-bucket/frontend/.env .
npm install
npm run build

chown apache:apache .*
chown apache:apache *
sudo service httpd restart

