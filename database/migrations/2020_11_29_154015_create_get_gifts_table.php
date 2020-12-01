<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGetGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('get_gifts', function (Blueprint $table) {
          // ギフト名、ブランド、画像パス、カテゴリID、giverの性別ID、giverの年齢、相手との関係ID、シチュエーションID, ユーザID
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->string('brand', 50);
            $table->string('image_path', 100);
            $table->integer('category_id');
            $table->integer('giver_gender_id');
            $table->integer('giver_age');
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
        Schema::dropIfExists('get_gifts');
    }
}
