<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Meal;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $meals = [
            [
                'name' => 'Sushi',
                'description' => 'Finest fish and veggies',
                'price' => 22.99,
            ],
            [
                'name' => 'Schnitzel',
                'description' => 'A german specialty!',
                'price' => 16.5,
            ],
            [
                'name' => 'Barbecue Burger',
                'description' => 'American, raw, meaty',
                'price' => 12.99,
            ],
            [
                'name' => 'Green Bowl',
                'description' => 'Healthy...and green...',
                'price' => 18.99,
            ]
        ];

        foreach ($meals as $meal) {
            Meal::create($meal);
        }
    }
}
