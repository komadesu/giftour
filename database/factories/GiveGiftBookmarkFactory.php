<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiveGiftBookmark;
use Faker\Generator as Faker;

$factory->define(GiveGiftBookmark::class, function (Faker $faker) {
    return [
        //
        'user_id' => $faker->numberBetween($min = 1, $max = 20),
        'give_gift_id' => $faker->numberBetween($min = 1, $max = 20),
    ];
});
