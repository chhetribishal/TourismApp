<?php

use App\Http\Controllers\PlacePostController;
use App\Http\Controllers\userController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//place routes
Route::any('add',[PlacePostController::class,'add']);
Route::any('update',[PlacePostController::class,'update']);
Route::any('delete',[PlacePostController::class,'delete']);
Route::any('show',[PlacePostController::class,'show']);

//User
Route::any('register',[userController::class,'register']);
Route::any('login',[userController::class,'login']);