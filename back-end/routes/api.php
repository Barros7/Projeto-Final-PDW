<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    Route::get('/user', 'App\Http\Controllers\UserController@index');
    Route::get('/user/{id}', 'App\Http\Controllers\UserController@show');
    Route::post('/user/save', 'App\Http\Controllers\UserController@store');
    Route::put('/user/edit/{id}', 'App\Http\Controllers\UserController@update');
    Route::delete('/user/delete/{id}', 'App\Http\Controllers\UserController@destroy');

    Route::get('/expense', 'App\Http\Controllers\ExpenseController@index'); //Show all registered expense
    Route::get('/expense/{id}', 'App\Http\Controllers\ExpenseController@show'); //Show one registered expense
    Route::post('/expense/save', 'App\Http\Controllers\ExpenseController@store'); //Save expense on database
    Route::put('/expense/edit/{id}', 'App\Http\Controllers\ExpenseController@update'); //Edit expense
    Route::delete('/expense/delete/{id}', 'App\Http\Controllers\ExpenseController@destroy'); //Delete expense

    Route::get('/category', 'App\Http\Controllers\CategoryController@index');
    Route::get('/category/{id}', 'App\Http\Controllers\CategoryController@show');
    Route::post('/category/save', 'App\Http\Controllers\CategoryController@store');
    Route::put('/category/edit/{id}', 'App\Http\Controllers\CategoryController@update');
    Route::delete('/category/delete/{id}', 'App\Http\Controllers\CategoryController@destroy');

    Route::get('/subcategory', 'App\Http\Controllers\SubcategoryController@index');
    Route::get('/subcategory/{id}', 'App\Http\Controllers\SubcategoryController@show');
    Route::get('/subcategory/find/{category_id}', 'App\Http\Controllers\SubcategoryController@categoryid');
    Route::post('/subcategory/save', 'App\Http\Controllers\SubcategoryController@store');
    Route::put('/subcategory/edit/{id}', 'App\Http\Controllers\SubcategoryController@update');
    Route::delete('/subcategory/delete/{id}', 'App\Http\Controllers\SubcategoryController@destroy');

    Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']); //API route for login user

    Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']); //API route for register new user
  
    //Protecting Routes
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/profile', function(Request $request) {
            return auth()->user();
        });

        Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);// API route for logout user
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });