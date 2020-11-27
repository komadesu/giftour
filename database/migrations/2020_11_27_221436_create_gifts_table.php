<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gifts', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('name', 50);
          $table->integer('price');
          $table->string('category_code', 10);
          $table->integer('img_id');
          $table->integer('post_user_id');
          $table->integer('active_or_passive');
          $table->integer('opponent_gender');
          $table->integer('opponent_age');
          $table->string('relationship_code');
          $table->string('situation_code');
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
        Schema::dropIfExists('gifts');
    }
}
