<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExtraTypesMenuAssocTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extra_types_menu_assoc', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('extra_type_id')->unsigned();
            $table->integer('menu_id')->unsigned();

            $table->timestamps();

            $table->foreign('extra_type_id')->references('id')->on('extra_types');
            $table->foreign('menu_id')->references('id')->on('menu');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('extra-types-menu-assoc');
    }
}
