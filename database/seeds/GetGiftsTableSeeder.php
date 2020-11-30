<?php

use Illuminate\Database\Seeder;

use App\Models\GetGift;

class GetGiftsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(GetGift::class, 20)->create();
    }
}
