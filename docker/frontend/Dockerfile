FROM nginx:latest

RUN	mkdir /usr/share/nginx/www

COPY ./data/www/ /usr/share/nginx/www/
COPY ./data/conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]