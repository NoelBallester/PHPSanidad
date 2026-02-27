<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   require_once('../Basedatos.php');
   require_once('TecnicosModel.php');
   $tec = new Tecnicos();
   error_reporting(E_ALL);
   $resul = [];
   $data = json_decode(file_get_contents('php://input'), true);
   $accion = $data['accion'];



   if ($accion == 'login') {
      $email = $data['email'];
      $password = $data['password'];

      $res = $tec->loginusuario($email, $password);

      if ($res == -2) {
         $resul['error'] = "Credenciales incorrectas.";
      }
      else
         if ($res == -3) {
            $resul['error'] = "El ID de usuario no existe.";
         }
         else
            if ($res == -4) {
               $resul['error'] = "ERROR AL CONSULTAR EN LA BD.";
            }
            else {
               $resul['error'] = "";
               $resul['user.id_tecnico'] = $res;
            }

      echo json_encode($resul);
      exit();
   }

   if ($accion == 'registro') {

      $res = $tec->insertar($data);
      if (is_string($res) && !is_numeric($res)) {
         $resul['error'] = $res;
      }
      else if ($res == -1) {
         $resul['error'] = "Error en la conexión con la base de datos.";
      }
      else if ($res == -2) {
         $resul['error'] = "El ID de usuario ya está registrado.";
      }
      else if ($res == -3) {
         $resul['error'] = "La contraseña no cumple con los requisitos de seguridad (8-16 caracteres, mayúsculas, minúsculas y números).";
      }
      else if ($res == -4) {
         $resul['error'] = "Hubo un error interno al procesar el registro.";
      }
      else {
         $resul['error'] = "";
         $resul['user'] = $res;
      }

      echo json_encode($resul);
      exit();
   }


   // TODO
   if ($accion == 'solicitacontrasena') {
      echo $data['email'];
      $para = $data['email'];
      $asunto = "Solicita cambio contraseña";
      $mensaje = "Este es el cuerpo del correo.";

      // Cabeceras del correo
      $cabeceras = "MIME-Version: 1.0" . "\r\n";
      $cabeceras .= "Content-type: text/html; charset=utf-8";


      // Envía el correo
      // $resul = mail($para, $asunto, $mensaje, $cabeceras);
      mail('jjsanchezrodriguez@gmail.com', 'Mi título', $mensaje);

      // echo json_encode($para);
      // echo ($para);
      exit();
   }

// TODO: Falta la modificación de los datos de una usuario
}