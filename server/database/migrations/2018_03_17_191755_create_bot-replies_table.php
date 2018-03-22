<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBotRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bot_replies', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('restaurant_id')->unsigned();
            $table->string('received', 50);
            $table->string('reply', 255);

            $table->timestamps();

            $table->foreign('restaurant_id')->references('id')->on('restaurants');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bot-replies');
    }
}
