<?php

	// GooseThemes Contact Form
	define('goose_contact_form', true);
	require_once('config.php');
	
	if(!$_POST['name'] || !$_POST['email'] || !$_POST['message']) {
		echo 'ERROR|* Mandatory Fields';
		exit;
	}

	set_include_path($path_to_pear);
	error_reporting(E_ALL & ~E_STRICT);
    include_once('Mail.php');
    include_once('Mail/mime.php');
	
	$subject=str_replace(array(
			'{subject}',
			'{name}',
		),
		array(
			$_POST['subject'],
			$_POST['name'],
		),
		$subject);
	
	$content=file_get_contents('template.html');
	$content=str_replace(array(
            '{name}',
            '{email}',
			'{subject}',
			'{message}',
			'{phone}',
	   ),
	   array(
            $_POST['name'],                      
			$_POST['email'],
			$_POST['subject'],
			$_POST['message'],
			$_POST['phone'],			
       ),
       $content);
	



    $text = strip_tags($content);
    $crlf = "\n";
    $mimeparams = array();
    $mimeparams['text_encoding'] = "7bit";
    $mimeparams['text_charset'] = "UTF-8";
    $mimeparams['html_charset'] = "UTF-8";
    $mimeparams['head_charset'] = "UTF-8";
    $_POST['email'] = '"' . $_POST['name'] . '" <' . $_POST['email'] . '>';
	
	
    $headers = array('From' => $_POST['email'],
        'To' => $send_to_email,
        'Subject' => $subject);
    $html = $content;
    $mime = new Mail_mime($crlf);
    $mime->setTXTBody($text);
    $mime->setHTMLBody($html);

    $body = $mime->get($mimeparams);
    $headers = $mime->headers($headers);
    $smtp = Mail::factory('smtp', array('host' => $host,
                'port' => $port,
                'auth' => true,
                'username' => $username,
                'password' => $password));
    $mail = $smtp->send($send_to_email, $headers, $body);
    if (PEAR::isError($mail)) {
        $alert = $mail->getMessage();
		echo 'ERROR|'.$alert;
		exit;
    } else {
        echo 'OK|Message sent!';
    }
	


?>