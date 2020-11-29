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
        $giveGift = new GiveGift;

        $giveGift->name = $request->input('name');
        $giveGift->price = $request->input('price');
        $giveGift->brand = $request->input('brand');
        // $giveGift->image_id = ここにはimageをimagesテーブルに保存した時のidが入る
        $giveGift->image_id = 1;//とりあえず
        $giveGift->category_id = $request->input('category');
        $giveGift->getter_gender_id = $request->input('getter_gender');
        $giveGift->getter_age = $request->input('getter_age');
        $giveGift->relationship_id = $request->input('relationship');
        $giveGift->situation_id = $request->input('situation');

        // 保存
        $giveGift->save();

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
    }
}
