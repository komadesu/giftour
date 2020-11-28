<?php

use Illuminate\Database\Seeder;

class RelationshipsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('relationships')->insert([
          ['relationship' => 1], //夫婦
          ['relationship' => 2], //恋人
          ['relationship' => 3], //家族
          ['relationship' => 4], //兄弟・姉妹
          ['relationship' => 5], //師弟
          ['relationship' => 6], //友達
          ['relationship' => 7], //先輩・後輩
          ['relationship' => 8] //その他
        ]);
    }
}
