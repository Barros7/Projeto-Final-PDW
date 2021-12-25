<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubcategoryController;

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
    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::post('/user', [UserController::class, 'store']);
    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::delete('/user{id}', [UserController::class, 'destroy']);

    Route::get('/expense', [ExpenseController::class, 'index']);
    Route::get('/expense/{id}', [ExpenseController::class, 'show']);
    Route::post('/expense', [ExpenseController::class, 'store']);
    Route::put('/expense/{id}', [ExpenseController::class, 'update']);
    Route::delete('/expense{id}', [ExpenseController::class, 'destroy']);

    Route::get('/category', [CategoryController::class, 'index']);
    Route::get('/category/{id}', [CategoryController::class, 'show']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::put('/category/{id}', [CategoryController::class, 'update']);
    Route::delete('/category{id}', [CategoryController::class, 'destroy']);

    Route::get('/subcategory', [SubcategoryController::class, 'index']);
    Route::get('/subcategory/{id}', [SubcategoryController::class, 'show']);
    Route::post('/subcategory', [SubcategoryController::class, 'store']);
    Route::put('/subcategory/{id}', [SubcategoryController::class, 'update']);
    Route::delete('/subcategory{id}', [SubcategoryController::class, 'destroy']);

    //API route for login user
    Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);

    //API route for register new user
    Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
  
    //Protecting Routes
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/profile', function(Request $request) {
            return auth()->user();
        });

        // API route for logout user
        Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });