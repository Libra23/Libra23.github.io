#!/bin/bash

npm run build
npm run export

expect -c "
set timeout 10
spawn sftp ${SERVER_NAME}
expect \"sftp>\"
send \"put -r out/* ${DOMAIN_NAME}/public_html/ \n\"
expect \"sftp>\"
send \"exit \n\"
exit 0
"