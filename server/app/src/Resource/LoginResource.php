<?php
/**
 * Created by PhpStorm.
 * User: marlon
 * Date: 08/03/18
 * Time: 13:06
 */

namespace App\Resource;

use App\AbstractResource;

/**
 * Class Resource
 * @package App
 */
class LoginResource extends AbstractResource
{
    /**
     * @param integer $authToken
     *
     * @return array|false
     */
    public function getByToken($authToken)
    {
        $userRecord = $this->entityManager->getRepository('Users')->findOneBy(
            array('authtoken' => $authToken)
        );
        if($userRecord)
            return $userRecord->getArrayCopy();
        else
            return false;
    }

    /**
     * @param integer $email
     *
     * @return array|false
     */
    public function  getByEmail($email)
    {
        $userRecord = $this->entityManager->getRepository('Users')->findOneBy(
            array('email' => $email)
        );
        if($userRecord)
            return $userRecord->getArrayCopy();
        else
            return false;
    }

    public function setToken($email, $token)
    {
        $user = $this->entityManager->getRepository('Users')->findOneBy(
            array('email' => $email)
        );
        $user->setAuthtoken($token);
        $this->entityManager->flush();
    }
}