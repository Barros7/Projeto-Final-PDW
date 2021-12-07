<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \APP\Models\Category::factory(10)
        ->hasCategory(10)
        ->create();
    }
}
