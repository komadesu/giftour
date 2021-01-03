<?php

use Illuminate\Database\Seeder;

class GendersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      DB::table('genders')->insert([
        ['gender' => '男性'],
        ['gender' => '女性'],
        ['gender' => 'その他'],
      ]);
    }
}
