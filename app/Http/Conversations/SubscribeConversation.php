<?php

namespace App\Http\Conversations;

use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Conversations\Conversation;

class SubscribeConversation extends Conversation
{
    public function run()
    {
        $this->welcome();
    }

    private function welcome()
    {
        $this->bot->reply('Hey and welcome! 👋');
        $this->askAboutSubscription();
    }

    private function askAboutSubscription()
    {
        $this->bot->reply('I help Christoph to spread some news about his book development. 📘');
        $this->bot->reply('If you like, I can keep you updated about it here on Facebook Messenger.');

        $question = Question::create('Are you in?')
            ->addButtons([
                Button::create('Yes please')
                    ->value('yes'),
                Button::create('Nope')
                    ->value('no'),
            ]);

        $this->ask($question, function (Answer $answer) {
            if ($answer->getValue() === 'yes') {
                $this->bot->reply('Wuhu, great to have you on board! 🎉');
                $this->bot->reply('I will message you when there is something new to tell ✌️');
            } else {
                $this->bot->reply('Ok no problem. If change your mind, just type "subscribe".');
            }

            $this->bot->reply("Christoph also likes to blog a lot. Make sure to checkout his site for more chatbot stuff: \n ✨ https://christoph-rumpel.com/ ✨ ");
            $this->bot->reply('See you! 👋');
        });
    }

}