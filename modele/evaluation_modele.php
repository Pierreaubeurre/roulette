<?php

require_once("connexion.php");

$req = "SELECT nom_Eleve,prenom_Eleve,idEleve FROM Eleve WHERE classe="."'".$_GET["classe"]."'";
 
$res = $conn->query($req);

?>