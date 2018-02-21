<?php
/**
 * WEBHOOK FOR FACEFOODS
 */

// includes/requires ------------------------------------------------------
require_once('db.class.php');
include 'config.php';

//------------------------------------------------------------------------

// WebHook verification---------------------------------------------------
$hub_verify_token = null;

if(isset($_REQUEST['hub_mode'])&&$_REQUEST['hub_mode']=='subscribe')
{
    $challenge=$_REQUEST['hub_challenge'];
    $hub_verify_token=$_REQUEST['hub_verify_token'];
    if($hub_verify_token==$verify_token)
        header('HTTP/1.1 200 OK');
        echo $challenge;
        die;
}

//-------------------------------------------------------------------------

// database connection----------------------------------------------------
$objDb = new db();
$link = $objDb->conecta_mysql();
//-------------------------------------------------------------------------

// get users's ID and message ----------------------------------------------------------
$input = json_decode(file_get_contents('php://input'), true);

$sender = $input['entry'][0]['messaging'][0]['sender']['id'];
$message = isset($input['entry'][0]['messaging'][0]['message']['text'])?$input['entry'][0]['messaging'][0]['message']['text']:'';


//-------------------------------------------------------------------------


// create entry in database to store user's data --------------------------

// verify is user already exists for this restaurant
$sql = "SELECT * FROM clientes WHERE id_facebook= '$sender' AND restaurant_id = $restaurant_id";

if($result = mysqli_query($link, $sql)){
    $user_data = mysqli_fetch_array($result);

    if(!isset($user_data['id_facebook'])){
        // if the user does not exist in the database, register the user

        // get user's information
        $user_info_url = 'https://graph.facebook.com/v2.6/'.$sender.'?fields=first_name,last_name&access_token='.$access_token;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $user_info_url);
        $result_user_info = curl_exec($ch);
        curl_close($ch);

        $obj = json_decode($result_user_info, true);

        $name = $obj['first_name'];
        $last_name = $obj['last_name'];
        
        $current_time = date('Y-m-d H:i:s');


        $sql = "INSERT INTO clientes (id_facebook, restaurant_id, name, last_name, last_contact_date) VALUES ('$sender', $restaurant_id, '$name', '$last_name', '$current_time')";

        mysqli_query($link, $sql);
    } 
    else{
        // if the user already exists, update 'last_contact_date'
        $current_time = date('Y-m-d H:i:s');

        $sql = "UPDATE clientes SET last_contact_date= '$current_time' WHERE id_facebook= '$sender' AND restaurant_id = $restaurant_id";

        mysqli_query($link, $sql);

        }
}


//-------------------------------------------------------------------------

$message_to_reply = '';

/**
 * Some Basic rules to validate incoming messages
 */

if($message == "hi") {  
  $answer = ["attachment"=>[
      "type"=>"template",
      "payload"=>[
        "template_type"=>"button",
        "text"=>"What do you want to do next?",
        "buttons"=>[
          [
            "type"=>"web_url",
            "url"=>'https://chatbot-facefoods-mauriciorockman.c9users.io/webview.php/?psid='.$sender,
            "title"=>"Show Website",
            "webview_height_ratio" => "tall",
            "messenger_extensions" => true
          ], 
          [
            "type"=>"postback",
            "title"=>"Start Chatting",
            "payload"=>"USER_DEFINED_PAYLOAD"
          ]
        ]
      ]
      ]];
}

    if($message == 'order'){
        $answer = ['text' => "Obrigado por fazer seu pedido"];
        
         $sql = "INSERT INTO orders (client_id) VALUES ('$sender')";

        mysqli_query($link, $sql);
    
    }



    $response = [
    'recipient' => [ 'id' => $sender ],
    'message' => $answer
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
if(!empty($input['entry'][0]['messaging'][0]['message'])){
    $result = curl_exec($ch);
}

?>