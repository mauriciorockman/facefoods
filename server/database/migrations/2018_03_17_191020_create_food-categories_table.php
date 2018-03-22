<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_categories', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('restaurant_id')->unsigned();
            $table->string('name', 50);
            $table->integer('category_type_id')->unsigned();

            $table->timestamps();

            $table->foreign('restaurant_id')->references('id')->on('restaurants');
            $table->foreign('category_type_id')->references('id')->on('category_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food-categories');
    }
}
