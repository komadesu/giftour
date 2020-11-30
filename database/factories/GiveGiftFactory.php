<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiveGift;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(GiveGift::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->randomElement(['香水', 'ピアス', 'アンパンマンチョコ', 'マフラー', 'ランニングシューズ', 'Tシャツ']),
        'price' => $faker->numberBetween($min = 500, $max = 60000),
        'brand' => $faker->randomElement(['ドルガバ', 'アガット', '明治', 'バーバリー', 'アディダス', 'ユナイテッドアローズ']),
        'image_id' => $faker->numberBetween($min = 1, $max = 50),
        'category_id' => $faker->numberBetween($min = 1, $max = 11),
        'getter_gender_id' => $faker->numberBetween($min = 1, $max = 3),
        'getter_age' => $faker->numberBetween($min = 0, $max = 80),
        'relationship_id' => $faker->numberBetween($min = 1, $max = 8),
        'situation_id' => $faker->numberBetween($min = 1, $max = 9),
    ];
});
