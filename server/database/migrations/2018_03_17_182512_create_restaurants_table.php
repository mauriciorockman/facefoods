<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('fb_id', 50);
            $table->integer('agency_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('address', 100);
            $table->string('postal_code', 15);
            $table->string('fb_pixel_id', 20);
            $table->string('fb_page_token', 255);

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('agency_id')->references('id')->on('agencies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}
