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
        // $gifts変数にGiftモデルから全てのレコードを取得して、代入
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
        // 先に画像をimagesテーブルに入れる
        // モデルからインスタンスを生成
        // $image = new Image;
        // 取れた画像データを保存させて$request->file('image'); 
        // その保存先のパスを格納する $image->image_path = 
        // $image->save();

        // モデルからインスタンスを生成
        $gift = new Gift;

        // $requestにformからのデータが格納されているので、条件分岐等適切な処理をして、以下のようにそれぞれ代入する(とりあえず一時的)バリデーションもあとでRequestを拡張してつける。
        $gift->name = $request->input('name');
        $gift->price = $request->input('price');
        $gift->category_code = $request->input('category');
        // $gift->image_id = ここにはimageをimagesテーブルに保存した時のidが入る
        $gift->image_id = 1;//とりあえず
        $gift->opponent_gender_id = $request->input('opponent_gender');
        $gift->opponent_age_id = $request->input('opponent_age');
        $gift->relationship_id = $request->input('relationship');
        $gift->situation_id = $request->input('situation');

        dd($name, $price, $category_id, $image_id, $opponent_gender_id, $opponent_age_id, $relationship_id, $situation_id);

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
