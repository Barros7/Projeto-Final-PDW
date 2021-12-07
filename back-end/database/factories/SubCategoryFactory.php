<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SubCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'subcategory_name' => $this->faker->subcategory_name(),
            'subcategory_value' => $this->faker->subcategory_value(),
            'subcategory_expense' => $this->faker->subcategory_date()
        ];
    }
}
