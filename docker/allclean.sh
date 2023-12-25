#!/bin/bash
source .env;

docker system prune -af;
docker volume rm $(docker volume ls -q);
docker volume prune -f;

if [ -d ${WWW_VOLUME} ]; then
    chmod 777 ${WWW_VOLUME};
    echo "removing ${WWW_VOLUME}";
    rm -r ${WWW_VOLUME}
fi
if [ -d ${DB_VOLUME} ]; then
    chmod 777 ${DB_VOLUME};
    echo "removing ${DB_VOLUME}";
    rm -r ${DB_VOLUME};
fi
