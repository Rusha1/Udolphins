<?php
$name = $_POST['name'];
$email = $_POST['email'];
$services = $_POST['services'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$services = htmlspecialchars($services);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$services = urldecode($services);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$services = trim($services);
$message = trim($message);

 /*mail("artemrusha@gmail.com", "Заявка с сайта", "Name:".$name.". E-mail: ".$email.". Services:".$services. ". Message:".$message ,"From: artemrusha@gmail.com \r\n");*/

if (mail("lilaxxxlilsite@gmail.com", "Заявка с сайта",
"\r\n Name: ".$name.
"\r\n E-mail: ".$email.
"\r\n Services: ".$services.
"\r\n Message: ".$message ,"From: order@UDolphins.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
header('Location: index.php');
?>
