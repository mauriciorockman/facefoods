<?php
/**
 * Created by PhpStorm.
 * User: marlon
 * Date: 10/03/18
 * Time: 17:12
 */

namespace App\Action;

use App\Resource\LoginResource;
use App\Resource\UserResource;

final class UserAction
{
    private $userResource;

    public function __construct(UserResource $userResource)
    {
        $this->userResource = $userResource;
    }

    public function getData($request, $response)
    {
        $userRecord = $this->userResource->getByToken($request->getAttribute("jwt"));

        if(!$userRecord){
            return $response->withStatus(404)
                ->withHeader('Content-Type', 'application/json')
                ->write(json_encode(array('error'=>'user not found')));
        }else{
            return $response->withStatus(200)
                ->withHeader('Content-Type', 'application/json')
                ->write(json_encode(array(
                                            'email'=>$userRecord['email'],
                                            'name'=>$userRecord['name'],
                                        )
                                    )
                        );
        }
    }
}