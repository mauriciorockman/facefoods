<?php

namespace App\Http\Conversations;

use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\Drivers\Facebook\Extensions\ButtonTemplate;
use BotMan\Drivers\Facebook\Extensions\ElementButton;

class DeliveryFeeConversation extends Conversation
{
    public function run()
    {
        $this->AskCEP("Digite seu CEP");
    }

    private function AskCEP($cep_question){

        $this->ask($cep_question, function (Answer $answer){

            $cep = $answer->getText();
            $cep = trim(str_replace(['-',' ','.'],'',$cep));
            $cep_check = preg_match("/^[0-9]{8}$/", $cep);

            if($cep_check){
                $street = $this->getAddressByCep($cep);

                if($street != ''){
                    $this->bot->reply("Sua rua é ".$street);

                    $this->bot->reply(ButtonTemplate::create('Estamos prontos para lhe servir!')
                        ->addButton(ElementButton::create('🍴 Taxa de entrega')->type('postback')->payload('TAXA_ENTREGA'))
                        ->addButton(ElementButton::create('🛵 Fazer Pedido')->url('https://chatbot-facefoods-mauriciorockman.c9users.io/webview/')
                            ->heightRatio(ElementButton::RATIO_FULL)
                            ->enableExtensions())
                        );
                }else{

                    $this->AskCEP("infelizmente esse CEP não existe. Certifique-se de que tenha digitado corretamente. Insira novamente seu CEP ou digite Cancelar");
                };

            }else{
                //$this->bot->reply("Formato incorreto de CEP :(");
                $this->AskCEP("Formato incorreto de CEP. Insira seu CEP no formato correto ou digite cancelar");
            }

        });
    }

    public function getAddressByCep($cep){

        $url = "https://viacep.com.br/ws/$cep/json/";
        $data = file_get_contents($url);
        $result = json_decode($data, true);

        if(isset($result['logradouro'])){
            return $result['logradouro'];
        }else{
            return false;
        }

    }
}
