<?php
/**
 * Created by PhpStorm.
 * User: marlon
 * Date: 08/03/18
 * Time: 13:05
 */

namespace App\Action;

use App\Resource\LoginResource;
use \Firebase\JWT\JWT;

final class LoginAction
{
    private $loginResource;

    public function __construct(LoginResource $loginResource)
    {
        $this->loginResource = $loginResource;
    }

    public function signUp($request, $response)
    {
        $loginData = $request->getParams();
        $loginRecord = $this->loginResource->getByEmail($loginData['email']);

        if(!$loginRecord){
            return $response->withStatus(404)
                ->withHeader('Content-Type', 'application/json')
                ->write(json_encode(array('error'=>'email not found')));
        }

        if(!password_verify($loginData['password'], $loginRecord['password'])){
            return $response->withStatus(401)
                ->withHeader('Content-Type', 'application/json')
                ->write(json_encode(array('error'=>'incorrect password')));
        }

        if($loginRecord && password_verify($loginData['password'], $loginRecord['password'])){
            $token = bin2hex(random_bytes(20));
            $this->loginResource->setToken($loginRecord['email'], $token);

            $tokenEncoded = JWT::encode($token, 'supersecretkeyyoushouldnotcommittogithub', "HS384");
            return $response->withStatus(200)
                ->withHeader('Content-Type', 'application/json')
                ->write(json_encode(array('token'=>$tokenEncoded)));
        }
    }
}