FROM nginx:latest

# noop for legacy migration
RUN mkdir /app && \
    echo "#!/bin/bash" > /app/migrate.sh && \
    chmod +x /app/migrate.sh && \
    chmod 775 /usr/share/nginx/html/ 
    

# npm and gatsby
RUN apt-get update && apt-get -y install npm && npm i -g gatsby-cli
COPY gatsby /home/blog
WORKDIR /home/blog
RUN npm update --save --save-dev
RUN npm install
# Syslink for serving gatsby site by nginx
RUN gatsby build
RUN nginx -V 2>&1 | grep --color -o -e '--prefix=[^[:space:]]\+'
RUN mv /home/blog/public /var/www/html/
RUN rm /var/www/html/index.nginx-debian.html

COPY nginx.conf /etc/nginx/nginx.conf
##COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
