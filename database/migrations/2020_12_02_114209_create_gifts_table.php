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
          // ギフト名、価格(nullable for give)、ブランド、画像パス、カテゴリID、ポストフラグ(give or get)、相手の性別ID、相手の年齢、相手との関係ID、シチュエーションID, ユーザID
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->integer('price');
            $table->string('brand', 50);
            $table->string('image_path', 100);
            $table->integer('category_id');
            $table->integer('post_flag');
            $table->integer('opponent_gender_id');
            $table->integer('opponent_age');
            $table->integer('relationship_id');
            $table->integer('situation_id');
            $table->integer('user_id');
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
