<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   require_once('../Basedatos.php');
   require_once('./MuestrasModel.php');
   require_once('../imagenesCitologias/ImagenesModel.php');
   $muestra = new MuestrasModel();
   $imagen = new ImagenesModel();
   error_reporting(E_ALL);
   $data = json_decode(file_get_contents('php://input'), true);
   $accion = $data['accion'];


   // Cargar muestras de una citología seleccionado
   if ($accion == "cargarMuestras") {
      $citologiaId = $data["citologiaId"];
      $res =  $muestra->cargarMuestras($citologiaId);
      echo json_encode($res);
      exit();
   }

   // Cargar una muestra seleccionada
   if ($accion == "cargarMuestra") {
      $muestraId = $data["muestraId"];
      $res =  $muestra->cargarMuestra($muestraId);
      echo json_encode($res);
      exit();
   }

   // Borrar Muestra por Id
   if ($accion == "borrarMuestra") {
      $muestraId = $data["muestraId"];
      $res =  $muestra->borrarMuestra($muestraId);
      echo json_encode($res);
      exit();
   }

   // Modificar Muestra por Id
   if ($accion == "modificarMuestra") {
      $muestraId = $data["muestraId"];
      $res =  $muestra->modificarMuestra($data);
      echo json_encode($res);
      exit();
   }

   //  Muestras por QR
   if ($accion == "cargarMuestraQR") {
      $res =  $muestra->cargarMuestraQR($data["qr"]);
      echo json_encode($res);
      exit();
   }
}
