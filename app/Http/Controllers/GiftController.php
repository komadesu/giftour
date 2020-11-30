<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\GiveGift;
use App\Models\GetGift;
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
        // $gifts変数にGiveGiftモデルから全てのレコードを取得して、代入
        $gifts = GiveGift::all();
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
        // 先に画像をimagesテーブルに入れる
        // モデルからインスタンスを生成
        // $image = new Image;
        // 取れた画像データを保存させて$request->file('image'); 
        // その保存先のパスを格納する $image->image_path = 
        // $image->save();

        // give OR get の投稿か条件分岐させる
        $gift = new GiveGift;

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        // $gift->image_id = ここにはimageをimagesテーブルに保存した時のidが入る
        $gift->image_id = 1;//とりあえず
        $gift->category_id = $request->input('category');
        $gift->getter_gender_id = $request->input('getter_gender');
        $gift->getter_age = $request->input('getter_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');

        // 保存
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
        $gift = GiveGift::find($id);
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
        $gift = GiveGift::find($id);
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
        $gift = GiveGift::find($id);

        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->brand = $request->input('brand');
        // $gift->image_id = ここにはimageをimagesテーブルに保存した時のidが入る
        $gift->image_id = 1;//とりあえず
        $gift->category_id = $request->input('category');
        $gift->getter_gender_id = $request->input('getter_gender');
        $gift->getter_age = $request->input('getter_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');

        // 保存
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
        $gift = GiveGift::find($id);

        $gift->delete();

        return redirect('/gifts');
    }
}
