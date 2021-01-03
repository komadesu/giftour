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
          ['situation' => '記念日'],
          ['situation' => '誕生日'],
          ['situation' => 'クリスマス'],
          ['situation' => '結婚式'],
          ['situation' => '入学式・卒業式'],
          ['situation' => 'バレンタインデー'],
          ['situation' => 'ホワイトデー'],
          ['situation' => '新居祝い'],
          ['situation' => 'お中元'],
          ['situation' => 'その他'],
        ]);
    }
}
