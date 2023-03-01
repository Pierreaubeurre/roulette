<?php

function liste($classe){

    $html_liste="";

    foreach ($classe as $ligne){
        $html_liste=$html_liste."<option value=".$ligne.">".$ligne."</option>";
    }

    $fichier = file_get_contents("vue/selection/selection.html");

    $vue = str_replace("%select%",$html_liste,$fichier);

    echo $vue;

}


require_once("modele/selection_modele.php");

liste($classe)

?>