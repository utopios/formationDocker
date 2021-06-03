FROM debian

LABEL version="1"

RUN apt-get update -y && apt-get install apache2 -q -y

WORKDIR /var/www/html
RUN rm index.html
COPY . .

EXPOSE 80

#--- au démarrage d'un conteneur à partir de notre image, on démarre le serveur apache2
CMD apache2ctl -D FOREGROUND

#--- pour créer une image docker build -t <nom_image> .