<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/agency/{agency}', 'App\Action\AgencyAction:fetchOne');
$app->post('/login/signup', 'App\Action\LoginAction:signUp');