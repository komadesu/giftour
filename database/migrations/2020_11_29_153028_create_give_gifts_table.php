<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiveGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('give_gifts', function (Blueprint $table) {
          // ギフト名、価格、ブランド、画像ID、カテゴリID、getterの性別ID、getterの年齢、相手との関係ID、シチュエーションID
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->integer('price');
            $table->string('brand', 50);
            $table->integer('image_id');
            $table->integer('category_id');
            $table->integer('getter_gender_id');
            $table->integer('getter_age');
            $table->integer('relationship_id');
            $table->integer('situation_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('give_gifts');
    }
}
