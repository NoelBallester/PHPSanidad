<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require_once("../Basedatos.php");
    require_once("ImagenesModel.php");
    $imagen = new ImagenesModel();
    error_reporting(E_ALL);
    $data = json_decode(file_get_contents("php://input"), true);
    $accion = $data["accion"];


    // Cargar las imagenes de una muestra
    if ($accion == "cargarImagenesMuestra") {
        $muestraId = $data["muestraId"];
        $res =  $imagen->cargarImagenesMuestra($muestraId);
        echo ($res);
        exit();
    }

    // Borrar Imagen por Id
    if ($accion == "borrarImagen") {
        $imageId = $data["imageId"];
        $res =  $imagen->borrarImagen($imageId);
        echo json_encode($res);
        exit();
    }
}
