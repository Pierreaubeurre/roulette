<?php

require_once("modele/connexion.php");

$classe=array();

$req = "SELECT DISTINCT classe FROM Eleve";
 
$res = $conn->query($req);

while ($result = $res->fetch_row()) {     // extrait chaque ligne une à une
    array_push($classe,$result[0]);
}

?>