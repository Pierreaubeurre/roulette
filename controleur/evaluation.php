<?php

/*
<tr>
<td>DECHAPPE</td>
<td>GAETAN</td>
</tr>
*/
function table($res){

    $tbody="";

    foreach ($res as $ligne) {

        $tbody=$tbody."<tr>";

        foreach ($ligne as $colonne) {

            $tbody=$tbody."<td>".$colonne."</td>";
        }
    
        $tbody=$tbody."</tr>";
    }

    $fichier = file_get_contents("vue/evaluation/evaluation.html");

    $vue = str_replace("%eleve%",$tbody,$fichier);

    echo $vue;

}

require_once("modele/evaluation_modele.php");

table($res);

?>