# Práctica 2 - Imagen para la aplicación del equipo
FROM nginx:stable-alpine
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
EXPOSE 80