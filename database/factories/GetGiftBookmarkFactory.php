<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GetGiftBookmark;
use Faker\Generator as Faker;

$factory->define(GetGiftBookmark::class, function (Faker $faker) {
    return [
        //
        'user_id' => $faker->numberBetween($min = 1, $max = 20),
        'get_gift_id' => $faker->numberBetween($min = 1, $max = 20),
    ];
});
