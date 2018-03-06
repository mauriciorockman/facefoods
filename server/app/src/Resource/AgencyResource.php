<?php

namespace App\Resource;

use App\AbstractResource;

/**
 * Class Resource
 * @package App
 */
class AgencyResource extends AbstractResource
{
    /**
     * @param integer|null $agency
     *
     * @return array
     */
    public function get($agency)
    {
        $agencyRecord = $this->entityManager->getRepository('App\Entity\Agencies')->findOneBy(
            array('id' => $agency)
        );
        if($agencyRecord){
            return $agencyRecord->getArrayCopy();
        }
    }
}