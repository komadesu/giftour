<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Gift;
use Faker\Generator as Faker;

$factory->define(Gift::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->randomElement(['香水', 'ピアス', 'アンパンマンチョコ', 'マフラー', 'ランニングシューズ', 'Tシャツ']),
        'price' => $faker->numberBetween($min = 500, $max = 60000),
        'brand' => $faker->randomElement(['ドルガバ', 'アガット', '明治', 'バーバリー', 'アディダス', 'ユナイテッドアローズ']),
        'image_file_name' => $faker->randomElement(['mountain.png', 'hill.png', 'test.png', 'sea.png']),
        'category_id' => $faker->numberBetween($min = 1, $max = 11),
        'post_flag' => $faker->numberBetween($min = 1, $max = 2),
        'opponent_gender_id' => $faker->numberBetween($min = 1, $max = 3),
        'opponent_age' => $faker->numberBetween($min = 0, $max = 80),
        'relationship_id' => $faker->numberBetween($min = 1, $max = 8),
        'situation_id' => $faker->numberBetween($min = 1, $max = 9),
        'user_id' => $faker->numberBetween($min = 1, $max = 20),
    ];
});
