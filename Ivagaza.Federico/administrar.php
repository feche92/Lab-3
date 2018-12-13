<?php

$objRetorno = new stdClass();
$objRetorno->Exito = false;

$destino = "./" . date("Ymd_His") . ".jpg";
        //$destino="imagen_defoult.jpg";
        
if(  move_uploaded_file($_FILES["foto"]["tmp_name"], "fotosTemp/".$destino) ){
    $objRetorno->Exito = true;
    $objRetorno->Path=$destino;
}

echo json_encode($objRetorno);

?>