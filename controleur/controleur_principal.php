<?php

$page = $_GET["page"];

switch ($page){

    default:
        require_once ("selection.php");
        break;

    case "evaluation":
        require_once("evaluation.php");
    
}


?>