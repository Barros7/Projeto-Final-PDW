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
            'name' => $this->faker->words(3, true),
            'value' => $this->faker->randomFloat(2, 100, 300),
            'date_time' => $this->faker->dateTime(),
        ];
    }
}
