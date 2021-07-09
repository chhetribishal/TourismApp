<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlacePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('place_posts', function (Blueprint $table) {
            $table->id();
            $table->string(column:'name');
            $table->string(column:'sort_desc');
            $table->string(column:'full_desc');
            $table->string(column:'image');
            $table->string(column:'imgpath');
            $table->date(column:'EnteredDate');
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
        Schema::dropIfExists('place_posts');
    }
}
