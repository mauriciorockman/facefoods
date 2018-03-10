<?php
    use Monolog\Logger;
    use Monolog\Handler\RotatingFileHandler;
    // TODO: Logger
    // TODO: Usar uma framework para variavel de ambiente para utilizar na chave secreta
    $app->add(new Tuupola\Middleware\JwtAuthentication([
        "attribute" => "jwt",
        'path' => '/api',
        "ignore" => ['/login/signup/'],
        "secret" => "supersecretkeyyoushouldnotcommittogithub",
        "algorithm" => ["HS384"],
        "before" => function($request, $container){
//            exit($request->getAttribute("jwt")[0]);
//            $container['info']->info($request->getAttribute("jwt"));
        }
    ]));