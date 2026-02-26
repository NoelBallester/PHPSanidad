<?php
 // se ha configurado esto en php.ini
// sendmail_path =  "C:\xampp7013\sendmail\sendmail.exe -t"

      $asunto = "Solicita cambio contraseña";
      $mensaje = "Este es el cuerpo del correo.";

      // Cabeceras del correo
      $cabeceras = "MIME-Version: 1.0" . "\r\n";
      $cabeceras .= "Content-type: text/html; charset=utf-8" ;
    $para ="aliciaramosmartin@gmail.com";

      // Envía el correo
      $resul=mail($para, $asunto, $mensaje, $cabeceras);
$resul
	

?>