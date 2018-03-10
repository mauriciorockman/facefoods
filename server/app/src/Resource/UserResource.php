<?php
/**
 * Created by PhpStorm.
 * User: marlon
 * Date: 10/03/18
 * Time: 17:30
 */

namespace App\Resource;

use App\AbstractResource;

/**
 * Class UserResource
 * @package App\Resource
 */
class UserResource extends AbstractResource
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
}
