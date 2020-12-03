<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/{any}', function () {
  return view('app');
})->where('any','.*');

Route::resource('gifts', 'GiftController');
// 上記書き換え+prefixとかmiddlewareとか
//Route::group(['prefix' => 'gifts', 'middleware' => 'auth'], function() {
//  Route::get('index', 'GiftController@index')->name('gifts.index');
//  Route::get('create', 'GiftController@create')->name('gifts.create');
//  Route::post('store', 'GiftController@store')->name('gifts.store');
//});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

