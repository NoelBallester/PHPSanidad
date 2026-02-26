<?php

require_once('Basedatos.php');
require_once('./imagenes/ImagenesModel.php');
require_once('./cassettes/CassettesModel.php');
require_once('./muestras/MuestrasModel.php');
require_once('./cassettes/cassettes.php');
require_once('./muestras/muestras.php');
require_once('./muestras/muestrasimagenes.php');
$cassette = new CassettesModel();
$muestras = new MuestrasModel();
$imagenes = new ImagenesModel();



$result= $cassette->cargarCassetteQR("--c--662b4d105105");

// $result= $muestras->borrarMuestra(41);
// $result= $imagenes->borrarImagen(25);
// $result= $muestras->modificarMuestra("Este lo he cambiado desde pruebas", "2024/5/5","Observaciones","tincion", 48);
// $result= $muestras->crearMuestra("Descripcion","2024/5/5","Observaciones","tincion", 4);

// 
/* $descripcion = "descripciones nuevas";
$fecha = "2024/04/04";
$caracteristicas = "caracteristicas nuevas";
$observaciones = "observaciones nuevas";
$tecnicoIdTecnico = "";
$organo = "Nervio";
$id_casette = 8;

$result = $cassette->modificarCassette
($fecha, $descripcion, $caracteristicas, $observaciones, $organo,  $id_casette); */



//  $result = $cassette->modificarCassette("","2","3","3","5",8);
//  $result = $cassette->borrarCassette(4);
//  $result = $cassette->cargarCassetteId(3);
// $result = $muestras->cargarMuestra(3);
//  $result = $imagenes->cargarImagenesMuestra(36);
//  $result = $cassette->cassettesOrgano("encefalo");

echo $result;
