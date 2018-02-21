<?php
// Your Page Access Token
$access_token = "EAACwFN9ApywBAKmzyv5eR5ZBzVlCOZB7nTAUqd0ZCoYvY9MxRZCUfQELy1LhgWZAmncXNV9rxqLZBeNaV3MPZCCK27fbTSMALpzfZBeW4Q4YcEesFyS5tmZAG6HjT3aLNjvHTMNb9uGdIUh8Bv10GIx7UGiu5IX4uzaCGGUVqGKnhQQZDZD";


// Your webhook varification token
$verify_token = "minhasenha123";


$restaurant_id = 1;

date_default_timezone_set('America/Sao_Paulo');


function sendMessage($psid, $message){
    
    $response = [
    'recipient' => [ 'id' => $psid ],
    'message' => ['text' => $message]
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

}

?>