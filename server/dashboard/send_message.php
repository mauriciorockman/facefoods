<?php

    include '../config.php';
    
	$sender = $_POST['id_facebook'];
	
	 $response = [
    'recipient' => [ 'id' => $sender ],
    'message' => ["text" => "Seu pedido foi confirmado!!!"]
    ];


//API Url
$url = 'https://graph.facebook.com/v2.6/me/messages?access_token='.$access_token;

//Initiate cURL.
$ch = curl_init($url);

//Encode the array into JSON.
//$jsonDataEncoded = $jsonData;

//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_POST, 1);

//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($response));

//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));

// Gambiarra para funcionar -- ARRUMAR MAIS TARDE!!!
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

//Execute the request

$result = curl_exec($ch);


?>