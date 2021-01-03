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
          ['category' => 'ファッション'],
          ['category' => 'スポーツ・アウトドア'],
          ['category' => 'アクセサリー'],
          ['category' => 'コスメ・健康'],
          ['category' => '香水・フレグランス'],
          ['category' => '食品・スイーツ'],
          ['category' => 'インテリア・家具'],
          ['category' => '本'],
          ['category' => '財布・小物'],
          ['category' => '大物'],
          ['category' => 'その他']
        ]);
    }
}
