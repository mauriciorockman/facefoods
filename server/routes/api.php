<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api = $app->make(Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api) {
    $api->post('/auth/login', [
        'as' => 'api.auth.login',
        'uses' => 'App\Http\Controllers\Auth\AuthController@postLogin',
    ]);

    $api->get('botman', 'App\Http\Controllers\BotManController@handle');

    $api->get('orders', function (){

        $orders = App\Order::all();

        return view('orders', compact('orders'));
    });

    $api->post('botman', 'App\Http\Controllers\BotManController@handle');

    $api->group(['middleware' => 'api.auth',], function ($api) {
//        $api->get('/', [
//            'uses' => 'App\Http\Controllers\APIController@getIndex',
//            'as' => 'api.index'
//        ]);
        $api->get('/auth/user', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@getUser',
            'as' => 'api.auth.user'
        ]);
//        $api->patch('/auth/refresh', [
//            'uses' => 'App\Http\Controllers\Auth\AuthController@patchRefresh',
//            'as' => 'api.auth.refresh'
//        ]);
        $api->delete('/auth/invalidate', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@deleteInvalidate',
            'as' => 'api.auth.invalidate'
        ]);


    });
});
