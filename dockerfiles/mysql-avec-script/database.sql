CREATE DATABASE formation;
USE formation;
CREATE TABLE personne (id int(11) primary key auto_increment, nom varchar(255), prenom varchar(255));

INSERT INTO personne (nom, prenom) values ('toto', 'tata'), ('titi','minet');