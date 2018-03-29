<?php

namespace App\Http\Middleware;

use App\Client;
use App\Restaurant;
use BotMan\BotMan\BotMan;
use BotMan\BotMan\Interfaces\Middleware\Heard;
use BotMan\BotMan\Messages\Incoming\IncomingMessage;

class SaveUserMiddleware implements Heard
{
    public function heard(IncomingMessage $message, $next, BotMan $bot)
    {
        $user = $bot->getUser();
        $recipient = $bot->getMessage()->getRecipient();
        $restaurantId = Restaurant::where("fb_id", $recipient)->value('id');

        if($user instanceof \BotMan\Drivers\Facebook\Extensions\User) {

            Client::createFromIncomingMessage($user, $restaurantId);


        }

        return $next($message);
    }
}