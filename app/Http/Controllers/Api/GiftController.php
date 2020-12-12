<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\User;
use App\Models\Gift;

class GiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // url example: /gifts?opponent_gender=female&opponent_age=2&price=4&relationship=3&situation=6

        $opponent_gender = $request->opponent_gender;
        $opponent_age = $request->opponent_age;
        $price = $request->price;
        $relationship = $request->relationship;
        $situation = $request->situation;


        $DEFAULT_OPPONENT_GENDER = false;
        $opponent_gender_id = $DEFAULT_OPPONENT_GENDER;
        if ($opponent_gender === 'male') {
          $opponent_gender_id = 1;
        }
        if ($opponent_gender === 'female') {
          $opponent_gender_id = 2;
        }
        if ($opponent_gender === 'other') {
          $opponent_gender_id = 3;
        }


        $DEFAULT_MIN_OPPONENT_AGE = 0;
        $DEFAULT_MAX_OPPONENT_AGE = 100;
        $min_opponent_age = $DEFAULT_MIN_OPPONENT_AGE;
        $max_opponent_age = $DEFAULT_MAX_OPPONENT_AGE;
        if ($opponent_age === '1') {
          $min_opponent_age = $DEFAULT_MIN_OPPONENT_AGE;
          $max_opponent_age = 19;
        }
        if ($opponent_age === '2') {
          $min_opponent_age = 20;
          $max_opponent_age = 29;
        }
        if ($opponent_age === '3') {
          $min_opponent_age = 30;
          $max_opponent_age = 39;
        }
        if ($opponent_age === '4') {
          $min_opponent_age = 40;
          $max_opponent_age = 49;
        }
        if ($opponent_age === '5') {
          $min_opponent_age = 50;
          $max_opponent_age = 59;
        }
        if ($opponent_age === '6') {
          $min_opponent_age = 60;
          $max_opponent_age = $DEFAULT_MAX_OPPONENT_AGE;
        }


        $DEFAULT_MIN_PRICE = 0;
        $DEFAULT_MAX_PRICE = 100000000;
        $min_price = $DEFAULT_MIN_PRICE;
        $max_price = $DEFAULT_MAX_PRICE;
        if ($price === '1') {
          $min_price = $DEFAULT_MIN_PRICE;
          $max_price = 5000;
        }
        if ($price === '2') {
          $min_price = 5000;
          $max_price = 10000;
        }
        if ($price === '3') {
          $min_price = 10000;
          $max_price = 15000;
        }
        if ($price === '4') {
          $min_price = 15000;
          $max_price = 20000;
        }
        if ($price === '5') {
          $min_price = 20000;
          $max_price = $DEFAULT_MAX_PRICE;
        }


        $DEFAULT_RELATIONSHIP_ID = false;
        $relationship_id = $DEFAULT_RELATIONSHIP_ID;
        if ($relationship === '1') {
          $relationship_id = 1;
        }
        if ($relationship === '2') {
          $relationship_id = 2;
        }
        if ($relationship === '3') {
          $relationship_id = 3;
        }
        if ($relationship === '4') {
          $relationship_id = 4;
        }
        if ($relationship === '5') {
          $relationship_id = 5;
        }
        if ($relationship === '6') {
          $relationship_id = 6;
        }
        if ($relationship === '7') {
          $relationship_id = 7;
        }
        if ($relationship === '8') {
          $relationship_id = 8;
        }


        $DEFAULT_SITUATION_ID = false;
        $situation_id = $DEFAULT_SITUATION_ID;
        if ($situation === '1') {
          $situation_id = 1;
        }
        if ($situation === '2') {
          $situation_id = 2;
        }
        if ($situation === '3') {
          $situation_id = 3;
        }
        if ($situation === '4') {
          $situation_id = 4;
        }
        if ($situation === '5') {
          $situation_id = 5;
        }
        if ($situation === '6') {
          $situation_id = 6;
        }
        if ($situation === '7') {
          $situation_id = 7;
        }
        if ($situation === '8') {
          $situation_id = 8;
        }
        if ($situation === '9') {
          $situation_id = 9;
        }
        if ($situation === '10') {
          $situation_id = 10;
        }

        $gifts = Gift::with('user')->when($opponent_gender_id, function ($query, $opponent_gender_id) {
          return $query->where('opponent_gender_id', $opponent_gender_id);
        })->when($min_opponent_age, function ($query, $min_opponent_age) {
          return $query->where('opponent_age', '>=', $min_opponent_age);
        })->when($max_opponent_age, function ($query, $max_opponent_age) {
          return $query->where('opponent_age', '<=', $max_opponent_age);
        })->when($min_price, function ($query, $min_price) {
          return $query->where('price', '>', $min_price);
        })->when($max_price, function ($query, $max_price) {
          return $query->where('price', '<', $max_price);
        })->when($relationship_id, function ($query, $relationship_id) {
          return $query->where('relationship_id', $relationship_id);
        })->when($situation_id, function ($query, $situation_id) {
          return $query->where('situation_id', $situation_id);
        })->with(['category', 'relationship', 'situation'])
          ->get();

        return response()->json(['data' => $gifts]);
    }

    /**
     * Display a listing of the resource each user posted.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserPosts($user_id)
    {
      $gifts = Gift::where('user_id', $user_id)
        ->with(['category', 'relationship', 'situation'])
        ->get();

      return response()->json(['data' => $gifts]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image_path = $request->file('image')->store('public/images');
        $image_file_name = str_replace('public/images/', '', $image_path);

        $gift = new Gift;

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        $gift->image_file_name = $image_file_name;
        $gift->category_id = $request->input('category');
        $gift->post_flag = $request->input('post_flag');
        $gift->opponent_gender_id = $request->input('opponent_gender');
        $gift->opponent_age = $request->input('opponent_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');
        $gift->user_id = $request->input('user');

        $gift->save();

        return response()->json(['data' => $gift]);
    }

    // ここ api としてはこの処理いらないけど、フロントエンドの実装で同じような条件分岐処理必要だからとりあえずとっとく
    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit($id)
    // {
    //     //
    //     $gift = Gift::find($id);

    //     $opponent_age = $gift->opponent_age;
    //     if ($opponent_age <= 19) {
    //       $opponent_age_id = 1;
    //     }
    //     if ($opponent_age >= 20 && $opponent_age <= 29) {
    //       $opponent_age_id = 2;
    //     }
    //     if ($opponent_age >= 30 && $opponent_age <= 39) {
    //       $opponent_age_id = 3;
    //     }
    //     if ($opponent_age >= 40 && $opponent_age <= 49) {
    //       $opponent_age_id = 4;
    //     }
    //     if ($opponent_age >= 50 && $opponent_age <= 59) {
    //       $opponent_age_id = 5;
    //     }
    //     if ($opponent_age >= 60) {
    //       $opponent_age_id = 6;
    //     }
    //     $gift->opponent_age = $opponent_age_id;

    //     return view('gift.edit', compact('gift'));
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $gift_id)
    {
        //
        $image = $request->file('image');
        $image_path = $image->store('public/images');
        $image_file_name = str_replace('public/images/', '', $image_path);

        $gift = Gift::find($gift_id);

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        $gift->image_file_name = $image_file_name;
        $gift->category_id = $request->input('category');
        //$gift->post_flag = $request->input('post_flag'); 更新不要
        $gift->opponent_gender_id = $request->input('opponent_gender');
        $gift->opponent_age = $request->input('opponent_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');
        //$gift->user_id = $request->input('user_id'); 更新不要

        $gift->save();

        return response()->json(['data' => $gift]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($gift_id)
    {
        //
        $gift = Gift::find($gift_id);

        $gift->delete();

        return response()->json(['data' => $gift]);
    }
}
