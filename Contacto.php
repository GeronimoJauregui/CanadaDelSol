<?php
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$destinatario = "reservaciones@canadadelsol.com";
$asusto = "CONTACTO PAGINA WEB";
$headers .= "from:".$email."\n";

$texto ="Nombre: ".$nombre." ".$apellidos;
$texto .="\n\nEmail: ".$email;
$texto .="\n\nTelefono: ".$telefono;
$texto .="\n\nmensaje: ".$mensaje;

mail($destinatario, $asusto, $texto, $headers);

?>