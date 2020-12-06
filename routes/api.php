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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function(){
  Route::get('bookmarks/{user_id}', 'api\BookmarkController@index');
  Route::post('bookmarks', 'api\BookmarkController@store');
  Route::delete('bookmarks', 'api\BookmarkController@destroy');
  // Route::resource('bookmarks', 'api\BookmarkController')->except(['create', 'show', 'edit', 'update']);
});
