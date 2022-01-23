<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Expense extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('expense', function(Blueprint $table){
            $table->id();
            $table->string('name');
            $table->integer('value');
            $table->timestamps();
            $table->unsignedBigInteger('subcategory_id');
            $table->unsignedBigInteger('users_id');
            $table->foreign('subcategory_id')->references('id')->on('subcategory');
            $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('expense');
    }
}
