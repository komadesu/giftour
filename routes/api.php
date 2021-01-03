<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => ['api']], function () {
  Route::post('users', 'Api\UserController@store');

  Route::get('/gifts', 'Api\GiftController@index');


  Route::middleware('auth:api')->group(function () {
    Route::get('/user', 'Api\UserController@user');

    Route::get('/bookmarks/{user_id}', 'Api\BookmarkController@index');
    Route::post('/bookmarks', 'Api\BookmarkController@store');
    Route::delete('/bookmarks', 'Api\BookmarkController@destroy');


    Route::get('/gifts/{user_id}', 'Api\GiftController@getUserPosts');
    Route::post('/gifts', 'Api\GiftController@store');
    Route::put('/gifts/{gift_id}', 'Api\GiftController@update');
    Route::delete('/gifts/{gift_id}', 'Api\GiftController@destroy');
  });

});
