<?php

namespace App\Http\Controllers;

use App\Menu;
use App\OrderItem;
use BotMan\BotMan\BotMan;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Drivers\DriverManager;
use App\Http\Conversations\DeliveryFeeConversation;
use App\Restaurant;
use App\Order;
use App\Client;
use BotMan\Drivers\Facebook\Extensions\ButtonTemplate;
use BotMan\Drivers\Facebook\Extensions\ElementButton;
use App\Http\Middleware\SaveUserMiddleware;
use BotMan\Drivers\Facebook\Extensions\ReceiptAddress;
use BotMan\Drivers\Facebook\Extensions\ReceiptAdjustment;
use BotMan\Drivers\Facebook\Extensions\ReceiptElement;
use BotMan\Drivers\Facebook\Extensions\ReceiptSummary;
use BotMan\Drivers\Facebook\Extensions\ReceiptTemplate;


class BotManController extends Controller
{


    public function handle()
    {
        // informações do POST realizado pelo Facebook
        $input = json_decode(file_get_contents('php://input'), true);

        // ID do usuário que enviou a mensagem
        $sender = $input['entry'][0]['messaging'][0]['sender']['id'];

        // ID da página que recebeu a mensagem
        $recipient = $input['entry'][0]['messaging'][0]['recipient']['id'];

        // determinar o token correspondente ao da página que recebeu a mensagem
        $token = Restaurant::where("fb_id", $recipient)->value('fb_page_token');

        // configurações específicas do facebook
        $config = [
            'facebook' => [
                'token' => $token,
                'app_secret' => '10038aa6d56e1df91036b26cfd13c576',
                'verification'=>'minhasenha123',
             ]
        ];

        // carregamento do driver do facebook
        DriverManager::loadDriver(\BotMan\Drivers\Facebook\FacebookDriver::class);

        $botman = BotManFactory::create($config);

        // middleware para salvar ou atualizar as informações dos usuários das mensagens recebidas
        $middleware = new SaveUserMiddleware();
        $botman->middleware->heard($middleware);

        $clientID = Client::where('psid', $sender)->value('id');


        $botman->hears('GET_STARTED|oi', function (BotMan $bot) {
            $name = $bot->getUser()->getFirstName();
            $bot->reply(ButtonTemplate::create('Oi, '.$name.'! Estamos prontos para lhe servir!')
                ->addButton(ElementButton::create('🍴 Fazer Pedido')->url('https://chatbot-facefoods-mauriciorockman.c9users.io/webview/')
                    ->heightRatio(ElementButton::RATIO_FULL)
                    ->enableExtensions())
                ->addButton(ElementButton::create('🛵 Taxa de entrega')->type('postback')->payload('TAXA_ENTREGA'))
                ->addButton(ElementButton::create('❓ Tenho uma Pergunta')->type('postback')->payload('PERGUNTA'))
            );
        });

        $botman->hears('taxa', function (BotMan $bot) {
            $bot->startConversation(new DeliveryFeeConversation());
        });

        $botman->hears('order', function (BotMan $bot) {
           $userID = $bot->getUser()->getId();
           $clientID = Client::where('psid', $userID)->value('id');

           if(Order::where('client_id',$clientID)->count()>0){




               $bot->typesAndWaits(1)->reply("Você tem um pedido conosco :)");



                $order = Order::where('client_id',$clientID)->get()->last();

                $orderID = $order->id;
                $orderItems = OrderItem::where('order_id', $orderID)->get();

                $receipt = ReceiptTemplate::create()
                        ->recipientName($order->name)
                        ->merchantName('Super Piza')
                        ->orderNumber($orderID)
                        ->timestamp('1428444852')
                        ->orderUrl('')
                        ->currency('BRL')
                        ->paymentMethod($order->payment_method);

                 foreach($orderItems as $item){
                    $name = Menu::where('id', $item->menu_id)->value('name');

                     $receipt->addElement(ReceiptElement::create($name)->price($item->menu_price)->subtitle($item->extras_description)->quantity($item->quantity));
                     }

                         $receipt->addAddress(ReceiptAddress::create()
                            ->street1($order->address)
                            ->city('Joinville')
                            ->postalCode(89224471)
                            ->state('SC')
                            ->country('Brasil')
                            )
                            ->addSummary(ReceiptSummary::create()
                                ->subtotal(47.00)
                                ->shippingCost(10 )
                                ->totalCost(57.00)
                            );


                $bot->typesAndWaits(1)->reply($receipt);

           }else{
               $bot->reply("Você não tem nenhum pedido conosco :(");
           }
        });

        $botman->listen();
    }


}
