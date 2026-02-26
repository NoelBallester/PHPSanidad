<!-- Este controlador se utiliza solo para las imagenes, ya que si mezclamos
con las peticiones que hacemos con el servicio no funciona el tratamiento de las
imagenes tanto para crear una muestra con imagen como para añadir una imagen como para
una muestra  -->

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   require_once('../Basedatos.php');
   require_once('MuestrasModel.php');
   require_once('../imagenes/ImagenesModel.php');
   $muestra = new MuestrasModel();
   $imagenmodel = new ImagenesModel();

   // Recuperar los parámetros enviados
   $accion = $_POST['accion'];

   // Crear una muestra
   if ($accion == "crearMuestra") {
      $descripcion = $_POST['descripcion'];
      $fecha = $_POST['fecha'];
      $observaciones = $_POST['observaciones'];
      $tincion = $_POST['tincion'];
      $cassetteIdCassette = $_POST['cassetteIdCassette'];
      $imagen = $_FILES['imagen'];
      $res =  $muestra->crearMuestra($descripcion,  $fecha,  $observaciones, $tincion,  $cassetteIdCassette);
      // Si la muestra se crea correctamente, creamos la imagen
      if ($res > 0) {
         $imagenTmpName = $_FILES['imagen']['tmp_name'];
         $imagenData = file_get_contents($imagenTmpName);

         $imagenmodel->crearImagen($imagenData, $res);
         echo json_encode("OK");
      } else
         echo json_encode($res);


      exit();
   }
   // Crear una muestra
   if ($accion == "crearImagenMuestra") {
      $imagen = $_FILES['imagen'];
      $muestraIdMuestra = $_POST['muestraIdMuestra'];

      $imagenTmpName = $_FILES['imagen']['tmp_name'];
      $imagenData = file_get_contents($imagenTmpName);

      $imagenmodel->crearImagen($imagenData,  $muestraIdMuestra);
      echo json_encode("OK");
      exit();
   }
}
