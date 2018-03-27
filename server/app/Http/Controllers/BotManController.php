<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Drivers\DriverManager;
use App\Http\Conversations\DeliveryFeeConversation;
use App\Restaurant;
use BotMan\Drivers\Facebook\Extensions\ButtonTemplate;
use BotMan\Drivers\Facebook\Extensions\ElementButton;

class BotManController extends Controller
{


    public function handle()
    {


        $input = json_decode(file_get_contents('php://input'), true);
        $sender = $input['entry'][0]['messaging'][0]['sender']['id'];
        $recipient = $input['entry'][0]['messaging'][0]['recipient']['id'];

        $token = Restaurant::where("fb_id", $recipient)->value('fb_page_token');

        $config = [
            'facebook' => [
                'token' => $token,
                'app_secret' => '10038aa6d56e1df91036b26cfd13c576',
                'verification'=>'minhasenha123',
             ]
        ];



        DriverManager::loadDriver(\BotMan\Drivers\Facebook\FacebookDriver::class);

        $botman = BotManFactory::create($config);



        $botman->hears('GET_STARTED|oi', function (BotMan $bot) {
            $name = $bot->getUser()->getFirstName();
            $bot->reply(ButtonTemplate::create('Oi, '.$name.'! Estamos prontos para lhe servir!')
                ->addButton(ElementButton::create('🍴 Taxa de entrega')->type('postback')->payload('TAXA_ENTREGA'))
                ->addButton(ElementButton::create('🛵 Fazer Pedido')->url('https://chatbot-facefoods-mauriciorockman.c9users.io/webview/')
                    ->heightRatio(ElementButton::RATIO_FULL)
                    ->enableExtensions())
            );
        });

        $botman->hears('taxa', function (BotMan $bot) {
            $bot->startConversation(new DeliveryFeeConversation());
        });

        $botman->listen();
    }


}
