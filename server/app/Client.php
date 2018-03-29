<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'psid',
        'restaurant_id',
        'first_name',
        'last_name',
        'postal_code',
        'address',
        'phone',
        'last_contact_date'
    ];


    public static function createFromIncomingMessage(\BotMan\Drivers\Facebook\Extensions\User $user, $restaurantID)
    {
        Client::updateOrCreate(['psid' => $user->getId()], [
            'psid' => $user->getId(),
            'first_name' => $user->getFirstName(),
            'last_name' => $user->getLastName(),
            'profile_pic' => $user->getProfilePic(),
            'gender' => $user->getGender(),
            'restaurant_id' =>$restaurantID,
        ]);
    }
}
