<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Bookmark;
use Faker\Generator as Faker;

$factory->define(Bookmark::class, function (Faker $faker) {
    return [
        //
        'user_id' => $faker->numberBetween($min = 1, $max = 20),
        'gift_id' => $faker->numberBetween($min = 1, $max = 20),
    ];
});
