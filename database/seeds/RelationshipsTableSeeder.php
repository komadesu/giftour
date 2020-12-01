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
          ['relationship' => '夫婦'],
          ['relationship' => '恋人'],
          ['relationship' => '家族'],
          ['relationship' => '兄弟・姉妹'],
          ['relationship' => '師弟'],
          ['relationship' => '友達'],
          ['relationship' => '先輩・後輩'],
          ['relationship' => 'その他'],
        ]);
    }
}
