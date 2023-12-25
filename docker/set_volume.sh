# Not necessary for this project!!!

#!/bin/bash

source .env;

mkdir -p ${WWW_VOLUME};
chmod 644 ${WWW_VOLUME};
mkdir -p ${DB_VOLUME};
chmod 644 ${DB_VOLUME};