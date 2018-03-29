<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function(Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('psid', 50);
            $table->integer('restaurant_id')->unsigned();
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('postal_code', 50);
            $table->string('address', 50);
            $table->string('phone', 50);
            $table->dateTime('last_contact_date');
            $table->integer('n_orders')->unsigned();
            $table->double('total_spent', 8, 2);
            $table->integer('bot_status');


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
        Schema::dropIfExists('clients');
    }
}
