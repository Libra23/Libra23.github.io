#!/bin/bash

rm -r out

npm run build
npm run export

expect -c "
set timeout 100
spawn sftp ${SERVER_NAME}
expect \"sftp>\"
send \"rm ${DOMAIN_NAME}/public_html/* \n\"
expect \"sftp>\"
send \"put -r out/* ${DOMAIN_NAME}/public_html/ \n\"
expect \"sftp>\"
send \"exit \n\"
exit 0
"