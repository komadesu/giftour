<?php

use Illuminate\Database\Seeder;

use App\Models\GiveGiftBookmark;

class GiveGiftBookmarksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(GiveGiftBookmark::class, 20)->create();
    }
}
