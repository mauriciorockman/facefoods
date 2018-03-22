<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePizzasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizzas', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('restaurant_id')->unsigned();
            $table->string('name');
            $table->string('description');
            $table->double('price', 8 ,2);
            $table->integer('max_flavors');
            $table->string('picURL');

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
        Schema::dropIfExists('pizzas');
    }
}
