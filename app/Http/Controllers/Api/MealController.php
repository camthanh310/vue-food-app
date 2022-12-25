<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MealResource;
use App\Models\Meal;
use Illuminate\Http\Request;

class MealController extends Controller
{
    public function index()
    {
        $meals = Meal::all();

        return MealResource::collection($meals);
    }
}
