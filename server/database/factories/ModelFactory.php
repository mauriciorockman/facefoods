<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/
$dummyData = Faker\Factory::create();

$factory->define(App\Agency::class, function ($dummyData) {
    return [
        'name' => 'Agência do '.$dummyData->firstNameMale
    ];
});

$factory->define(App\User::class, function ($dummyData) {
    return [
        'name' => $dummyData->firstNameMale .' '. $dummyData->lastName,
        'email' => strtolower($dummyData->firstNameMale).'@example.com',
        'password' => app('hash')->make('12345'),
        'agency_id' => factory(App\Agency::class)->create()->id,
        'remember_token' => str_random(10),
    ];
});