<?php

namespace App\Http\Middleware;

use App\User;
use BotMan\BotMan\BotMan;
use BotMan\BotMan\Interfaces\Middleware\Heard;
use BotMan\BotMan\Messages\Incoming\IncomingMessage;

class SaveUserMiddleware implements Heard
{
    public function heard(IncomingMessage $message, $next, BotMan $bot)
    {
        $user = $bot->getUser();

        if($user instanceof \BotMan\Drivers\Facebook\Extensions\User) {
            User::createFromIncomingMessage($user);
        }

        return $next($message);
    }
}