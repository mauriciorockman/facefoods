<?php
	require_once('db.class.php');
	require_once('config.php');

	$psid = $_POST['psid'];
	$item_quantity = $_POST['item_quantity'];
    
    $order_summary = '';
    
    for($i=0; $i< $item_quantity; $i++){
        $order_summary .= strtoupper("\n". $_POST["items"][$i]["product"]);
        $n_attributes = $_POST['items'][$i]['n_attributes'];
        for($a=0; $a<$n_attributes; $a++){
            $order_summary .= "\n -".$_POST["items"][$i]["attributes"][$a]['attribute'];
        }
    }
	
	$response = [
    'recipient' => [ 'id' => $psid],
    'message' => ["text" => "aaaa delícia! sue pedido foi confimado! \n Você pediu $item_quantity items $order_summary"]
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