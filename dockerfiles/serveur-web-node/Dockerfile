#--- Image source
FROM debian

#---Informations sur l'image
LABEL version="1.0" 
#--- Démarrer des commandes au moment de la création de l'image
RUN apt-get update -y && apt-get install nodejs -y && apt-get install npm -y
#--- se placer à l'interieur du dossier /home/web
WORKDIR /home/web

#--- Copier le dossier ou se trouve le dockerfile à l'interieur de la cible, on peut également utiliser ADD 
COPY . .

#--- ADD <adresse_web_zip> . => il va chercher le zip (en http par exemple ) et le dezipper dans la cible 

#--- Exposer des ports

EXPOSE 80

RUN npm install express

#--- indiquer la commande de démarrage des containers créés à partir de notre image
CMD ["node","index.js"]




