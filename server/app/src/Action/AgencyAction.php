<?php
namespace App\Action;

use App\Resource\AgencyResource;

final class AgencyAction
{
    public function __construct(AgencyResource $agencyResource)
    {
        $this->AgencyResource = $agencyResource;
    }

    public function fetchOne($request, $response, $args)
    {
        $agencyRecord = $this->AgencyResource->get($args['agency']);
        if($agencyRecord){
            $response->getBody()->write('Você selecionou a agência: '. $agencyRecord[name]);
            return $response;
        }
    }   
}