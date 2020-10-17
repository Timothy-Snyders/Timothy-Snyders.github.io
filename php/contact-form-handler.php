<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'officialtimothysnyders@gmail.com';

	$email_subject = 'Testing Email Handler - New Form Submission';

	$email_body = "User Name: " + $name + ".\nUser Email: " + $visitor_email + ".\nUser Message: " + $message + ".\n";

	$to = "officialtimothysnyders@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: index.html");

?>