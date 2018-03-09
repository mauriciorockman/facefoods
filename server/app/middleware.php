<?php
    use Monolog\Logger;
    use Monolog\Handler\RotatingFileHandler;
    // TODO: Logger
    $app->add(new Tuupola\Middleware\JwtAuthentication([
        "attribute" => "jwt",
        'path' => '/api/',
        "ignore" => ['/login/signup/'],
        "secret" => "supersecretkeyyoushouldnotcommittogithub",
        "algorithm" => ["HS384"],
        "before" => function($request, $container){
            $container['info']->info($request->getAttribute("jwt"));
        }
    ]));