<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$service = $_POST['service'];
	$message = $_POST['message'];

	$subject = "=?utf-8?B?".base64_encode("Заявка с сайта")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("lilaxxxlilsite@gmail.com", $subject, 
	"\r\n Telegram or WhatsApp: ".$name.
	"\r\n E-mail: ".$email.
	"\r\n Service: ".$service.
	"\r\n Message: ".$message,
	"From: order@UDolphins.com \r\n");
	echo $success;
?>