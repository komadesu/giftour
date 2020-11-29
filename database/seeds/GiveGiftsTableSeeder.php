<?php

use Illuminate\Database\Seeder;

use App\Models\GiveGift;

class GiveGiftsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(GiveGift::class, 20)->create();
    }
}
