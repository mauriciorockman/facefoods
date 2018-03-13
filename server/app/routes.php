<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->group('/login', function(){
    $this->post('/signup', 'App\Action\LoginAction:signUp');

});

$app->group('/api', function(){
    $this->group('/user',function(){
       $this->get('/data', 'App\Action\UserAction:getData');
        $this->get('/authed', 'App\Action\UserAction:isAuthed');
    });
});