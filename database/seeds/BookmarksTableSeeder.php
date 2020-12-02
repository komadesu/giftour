<?php

use Illuminate\Database\Seeder;

use App\Models\Bookmark;

class BookmarksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(Bookmark::class, 20)->create();
    }
}
