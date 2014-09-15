<?php


	if(!defined('goose_contact_form')) exit;
	
	$host = 'xxxxxxxxxxxxxx'; 							// Hostname of your SMTP server
	$port = 587; 										// SMTP server port
	 
	$username = 'xxxxxxx@tld.com'; 						// Username for your SMTP account
	$password = 'xxxxxx'; 								// Password for your SMTP account
	
	$send_to_email = 'xxxxxxx@tld.com'; 				// Email to delivering messages
	
	$subject = 'Message from Modernus: {subject}';  	// Subject. You can use here two variables {subject} and {name}
	
	$path_to_pear = '/usr/local/lib/php/' 				// Static path to PEAR. Leave empty if pear path is added to include dirs.
	

?>