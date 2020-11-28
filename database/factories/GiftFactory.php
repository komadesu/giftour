<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Gift;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Gift::class, function (Faker $faker) {
    return [
        'name' => $faker->realText(10),
        'price' => $faker->numberBetween($min = 500, $max = 60000),
        'category_code' => $faker->randomElement(['C001', 'C002', 'C003', 'C004', 'C005', 'C006', 'C007', 'C008', 'C009','C010','C011']),
        'img_id' => $faker->numberBetween($min = 1, $max = 50),
        'post_user_id' => $faker->numberBetween($min = 1, $max = 20),
        'active_or_passive' => $faker->randomElement([0, 1]),
        'opponent_gender' => $faker->randomElement([0, 1]),
        'opponent_age' => $faker->randomElement([1, 2, 3, 4, 5, 6]),
        'relationship_code' => $faker->randomElement(['R101', 'R102', 'R103', 'R104', 'R105', 'R106', 'R107', 'R108']),
        'situation_code' => $faker->randomElement(['S201', 'S202', 'S203', 'S204', 'S205', 'S206', 'S207', 'S208', 'S209'])
    ];
});
