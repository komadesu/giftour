<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        //
        'type' => $faker->randomElement(['png', 'jpeg', 'svg']),
        'content_path' => $faker->numberBetween($min = 1000, $max = 9999),
        'size' => $faker->numberBetween($min = 1000, $max = 9999),
    ];
});
