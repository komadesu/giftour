<?php

use Illuminate\Database\Seeder;

class SituationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('situations')->insert([
          ['situation' => 1], //記念日
          ['situation' => 2], //誕生日
          ['situation' => 3], //クリスマス
          ['situation' => 4], //結婚式
          ['situation' => 5], //入学式・卒業式
          ['situation' => 6], //バレンタインデー
          ['situation' => 7], //ホワイトデー
          ['situation' => 8], //新居祝い
          ['situation' => 9], //お中元
          ['situation' => 10], //その他
        ]);
    }
}
