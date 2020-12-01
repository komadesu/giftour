<?php

use Illuminate\Database\Seeder;

use App\Models\GetGiftBookmark;

class GetGiftBookmarksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(GetGiftBookmark::class, 20)->create();
    }
}
