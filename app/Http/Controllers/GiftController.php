<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Gift;
use App\Models\Image;

class GiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gifts = Gift::all();
        return view('gift.index', compact('gifts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('gift.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $gift = new Gift;

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        // 取れた画像データを保存させて$request->file('image'); 
        // その保存先のパス(ファイル名)を格納する $image->image_path = 
        $gift->image_path = 'hero.png';//とりあえず
        $gift->category_id = $request->input('category');
        $gift->post_flag = $request->input('post_flag');
        $gift->opponent_gender_id = $request->input('opponent_gender');
        $gift->opponent_age = $request->input('opponent_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');
        $gift->user_id = $request->input('user');

        $gift->save();

        // 保存後 一覧ページへリダイレクト
        return redirect('/gifts');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        // 引数で受け取った$idを元にfindでレコードを取得
        $gift = Gift::find($id);
        // viewにデータを渡す
        return view('gift.show', compact('gift'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $gift = Gift::find($id);
        return view('gift.edit', compact('gift'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $gift = Gift::find($id);

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        $gift->image_path = 'mountain.png';//とりあえず
        $gift->category_id = $request->input('category');
        $gift->post_flag = $request->input('post_flag');
        $gift->opponent_gender_id = $request->input('opponent_gender');
        $gift->opponent_age = $request->input('opponent_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');
        $gift->user_id = $request->input('user_id');

        $gift->save();

        // 保存後 一覧ページへリダイレクト
        return redirect('/gifts/' . $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $gift = Gift::find($id);

        $gift->delete();

        return redirect('/gifts');
    }
}
