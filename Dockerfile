FROM nginx:latest
COPY ci/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/jellyfish /usr/share/nginx/html
EXPOSE 80
