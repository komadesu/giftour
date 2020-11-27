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
          // 商品名、価格、カテゴリコード、画像id、投稿者id、あげたorもらった、相手の性別、相手の年齢、相手との関係コード、シチュエーションコード
          $table->bigIncrements('id');
          $table->string('name', 50);
          $table->integer('price');
          $table->string('category_code', 10);
          $table->integer('img_id');
          $table->integer('post_user_id');
          $table->integer('active_or_passive');
          $table->tinyInteger('opponent_gender');
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
