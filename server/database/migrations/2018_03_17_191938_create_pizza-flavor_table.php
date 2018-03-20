<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePizzaFlavorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizza_flavor', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('pizza_flavor_type_id')->unsigned();
            $table->string('name', 255);
            $table->string('description', 255);
            $table->double('price', 8 ,2);

            $table->timestamps();

            $table->foreign('pizza_flavor_type_id')->references('id')->on('pizza_flavor_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizza-flavor');
    }
}
