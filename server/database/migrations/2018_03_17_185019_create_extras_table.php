<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExtrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extras', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('extra_type_id')->unsigned();
            $table->string('name', 50);
            $table->string('description', 100);
            $table->double('price', 8 ,2);

            $table->timestamps();

            $table->foreign('extra_type_id')->references('id')->on('extra_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('extras');
    }
}
