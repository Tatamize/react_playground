# **************************************************************************** #
# 
#   Hello! Welcome to my Inception Makifile, 
#   the command explanation is at the end of file 
# 
#   In srcs/.env, you can set items                                                                    
#   - domain name, - volume directory(wp and sql), - username,
#   - sql informations, - wp user information (for admin and one other) 
# 
# **************************************************************************** #

# The command for transcendence is "docker-compose up --build"
# This Makefile is not necessary, but handy to check the command, right?

all: build up

re: stop allclean build up

up:
	docker compose -f ./docker-compose.yml up -d

start:
	docker compose -f ./docker-compose.yml start

stop:
	docker compose -f ./docker-compose.yml stop

build: init
	docker compose -f ./docker-compose.yml build --no-cache

down:
	docker compose -f ./docker-compose.yml down


allclean: clean
	@echo "Be careful! The mounted volume will be deleted with this command, OK? Y/N"; \
	read user_response ; \
	if [ "$$user_response" == "Y" ] || [ "$$user_response" == "y" ]; then  \
    	bash ./allclean.sh  ;\
	else  \
    	echo "Procedure aborted by user."  ;\
	fi

init:
	bash ./set_volume.sh
		

clean:
	docker compose -f ./docker-compose.yml down --rmi all -v

.PHONY: all re up start stop build down init allclean clean


# all:  	build images, make containers, start containers (use volume's old information if it remains)
# re:  		stop containers, clean everything(remove volumes), build images, make containers, start containers
# up: 		make containers, start containers
# start: 	start containers
# stop: 	stop containers
# build: 	set domain to the machine, make images
# down: 	stop containers, remove containers (volumes remains)
# init:  	set domains to the machine, make volume directorys
# allclean:	clean containers, images, volumes
# clean:	clean containers, images