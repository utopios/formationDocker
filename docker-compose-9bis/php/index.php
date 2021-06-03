<?php

echo "test";

//script pour connecter ma base de données

$dbh = new PDO('mysql:host=db;dbname=', 'root', 'root');

var_dump($dbh);