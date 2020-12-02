<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(GiftsTableSeeder::class);
        $this->call(GiveGiftsTableSeeder::class);
        $this->call(GetGiftsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(GendersTableSeeder::class);
        $this->call(RelationshipsTableSeeder::class);
        $this->call(SituationsTableSeeder::class);
        $this->call(GiveGiftBookmarksTableSeeder::class);
        $this->call(GetGiftBookmarksTableSeeder::class);
    }
}
