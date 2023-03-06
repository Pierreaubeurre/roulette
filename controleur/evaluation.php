<?php

function day($fichier)//met la date du jour au html envoyer à l'utilisateur
{
    date_default_timezone_set('Europe/Paris');
    $date = date('d/m/y');
    
    $fichier = str_replace("%date%", $date, $fichier);
    return $fichier;

}

function table($res)
{
    $tbody = "";

    foreach ($res as $ligne) {//créer le tableau des élèves

        $tbody = $tbody . "<tr>";

        foreach ($ligne as $colonne) {

            $tbody = $tbody . "<td>" . $colonne . "</td>";
        }

        $tbody = $tbody . "</tr>";
    }

    $fichier = file_get_contents("vue/evaluation/evaluation.html");

    $fichier = day($fichier);

    $vue = str_replace("%eleve%", $tbody, $fichier); //rempli le tableau avec les élèves

    echo $vue;

}

require_once("modele/evaluation_modele.php");

table($res);

?>