<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
          ['category' => 1], //ファッション
          ['category' => 2], //スポーツ・アウトドア
          ['category' => 3], //アクセサリー
          ['category' => 4], //コスメ・健康
          ['category' => 5], //香水・フレグランス
          ['category' => 6], //食品・スイーツ
          ['category' => 7], //インテリア・家具
          ['category' => 8], //本
          ['category' => 9], //財布・小物
          ['category' => 10], //大物
          ['category' => 11] //その他
        ]);
    }
}
