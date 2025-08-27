<?php
error_reporting(0);
ini_set('display_errors', 0); 

$secret = "6Lf5vbMrAAAAAGmUCSUM16e2We-5_AtlaEhHTO55";
$response = $_POST['g-recaptcha-response'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha = json_decode($verify);

file_put_contents("captcha_log.txt", $verify . PHP_EOL, FILE_APPEND);

if ($captcha && $captcha->success) {
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

    if(mail($destinatario, $asunto, $texto, $headers)){
        echo "✅ Email sent successfully";
    } else {
        echo "❌ Error sending the email";
    }
} else {
    echo "❌ Error: please confirm that you are not a robot";
}
?>