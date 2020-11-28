<?php

use Illuminate\Database\Seeder;

use App\Models\Gift;

class GiftsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(Gift::class, 20)->create();
    }
}
