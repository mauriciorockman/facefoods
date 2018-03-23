<?php


use BotMan\BotMan\BotMan;
use App\Http\Middleware\SaveUserMiddleware;
use App\Http\Conversations\SubscribeConversation;
use App\Http\Conversations\DeliveryFeeConversation;
use BotMan\Drivers\Facebook\Extensions\ButtonTemplate;
use BotMan\Drivers\Facebook\Extensions\ElementButton;

$botman = resolve('botman');


$middleware = new SaveUserMiddleware();
$botman->middleware->heard($middleware);



$botman->hears('GET_STARTED|oi', function (BotMan $bot) {
    $bot->reply(ButtonTemplate::create('Estamos prontos para lhe servir!')
        ->addButton(ElementButton::create('🍴 Taxa de entrega')->type('postback')->payload('TAXA_ENTREGA'))
        ->addButton(ElementButton::create('🛵 Fazer Pedido')->url('https://chatbot-facefoods-mauriciorockman.c9users.io/webview/')
            ->heightRatio(ElementButton::RATIO_FULL)
            ->enableExtensions())
    );
});


$botman->hears('TAXA_ENTREGA', function (BotMan $bot) {
    $bot->startConversation(new DeliveryFeeConversation());
});


$botman->fallback(function($bot) {
    $bot->reply('Desculpe, não entendi :/');
});