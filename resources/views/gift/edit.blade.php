{{-- layoutsフォルダのgift.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとの値を代入 --}}
@section('title', '編集')

{{-- gift.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <h2>あげた or もらったプレゼントのレコード編集画面( I gave or I got )</h2>
  <form action="/gifts/{{$gift->id}}" method="post" enctype="multipart/form-data">
    @csrf
    <div>
      <label for="name">ギフト名（あげたもの or もらったもの）</label>
      <input type="text" name="name" value="{{$gift->name}}" placeholder="ギフトの名前を入れる">
    </div>
    {{-- 価格 I got の更新時には表示しない --}}
    <div>
      <label for="price">価格</label>
      <input type="number" name="price" value="{{$gift->price}}" placeholder="ギフトの値段を入れる">
    </div>
    <div>
      <label for="brand">ブランド・メーカー等</label>
      <input type="text" name="brand" value="{{$gift->brand}}" placeholder="ブランドの名前を入れる">
    </div>
    <div>
      <label for="image">画像</label>
      <input type="file" name="image">
      <img src="{{ asset('/storage/images/' . $gift->image_file_name) }}">
    </div>
    <div>
      <label for="category">カテゴリー</label>
      <select name="category" id="category">
        <option>選択</option>
        <option value="1" @if ($gift->category_id === 1) selected @endif>ファッション</option>
        <option value="2" @if ($gift->category_id === 2) selected @endif>スポーツ・アウトドア</option>
        <option value="3" @if ($gift->category_id === 3) selected @endif>アクセサリー</option>
        <option value="4" @if ($gift->category_id === 4) selected @endif>コスメ・健康</option>
        <option value="5" @if ($gift->category_id === 5) selected @endif>香水・フレグランス</option>
        <option value="6" @if ($gift->category_id === 6) selected @endif>食品・スイーツ</option>
        <option value="7" @if ($gift->category_id === 7) selected @endif>インテリア・家具</option>
        <option value="8" @if ($gift->category_id === 8) selected @endif>本</option>
        <option value="9" @if ($gift->category_id === 9) selected @endif>財布・小物</option>
        <option value="10" @if ($gift->category_id === 10) selected @endif>大物</option>
        <option value="11" @if ($gift->category_id === 11) selected @endif>その他</option>
      </select>
    </div>
    <div>
      <label for="opponent_gender">相手の性別</label>
      <select name="opponent_gender" id="opponent_gender">
        <option>選択</option>
        <option value="1" @if ($gift->opponent_gender_id === 1) selected @endif>男性</option>
        <option value="2" @if ($gift->opponent_gender_id === 2) selected @endif>女性</option>
        <option value="3" @if ($gift->opponent_gender_id === 3) selected @endif>その他</option>
      </select>
    </div>
    <div>
      <label for="opponent_age">相手の年齢</label>
      <select name="opponent_age" id="opponent_age">
        <option>選択</option>
        <option value="1" @if ($gift->opponent_age === 1) selected @endif>~19歳</option>
        <option value="2" @if ($gift->opponent_age === 2) selected @endif>20~29歳</option>
        <option value="3" @if ($gift->opponent_age === 3) selected @endif>30~39歳</option>
        <option value="4" @if ($gift->opponent_age === 4) selected @endif>40~49歳</option>
        <option value="5" @if ($gift->opponent_age === 5) selected @endif>50~59歳</option>
        <option value="6" @if ($gift->opponent_age === 6) selected @endif>60歳~</option>
      </select>
    </div>
    <div>
      <label for="relationship">相手のとの関係性</label>
      <select name="relationship" id="relationship">
        <option>選択</option>
        <option value="1" @if ($gift->relationship_id === 1) selected @endif>夫婦</option>
        <option value="2" @if ($gift->relationship_id === 2) selected @endif>恋人</option>
        <option value="3" @if ($gift->relationship_id === 3) selected @endif>家族</option>
        <option value="4" @if ($gift->relationship_id === 4) selected @endif>兄弟・姉妹</option>
        <option value="5" @if ($gift->relationship_id === 5) selected @endif>師弟</option>
        <option value="6" @if ($gift->relationship_id === 6) selected @endif>友達</option>
        <option value="7" @if ($gift->relationship_id === 7) selected @endif>先輩・後輩</option>
        <option value="8" @if ($gift->relationship_id === 8) selected @endif>その他</option>
      </select>
    </div>
    <div>
      <label for="situation">シチュエーション</label>
      <select name="situation" id="situation">
        <option>選択</option>
        <option value="1" @if ($gift->situation_id === 1) selected @endif>記念日</option>
        <option value="2" @if ($gift->situation_id === 2) selected @endif>誕生日</option>
        <option value="3" @if ($gift->situation_id === 3) selected @endif>クリスマス</option>
        <option value="4" @if ($gift->situation_id === 4) selected @endif>結婚式</option>
        <option value="5" @if ($gift->situation_id === 5) selected @endif>入学式・卒業式</option>
        <option value="6" @if ($gift->situation_id === 6) selected @endif>バレンタインデー</option>
        <option value="7" @if ($gift->situation_id === 7) selected @endif>ホワイトデー</option>
        <option value="8" @if ($gift->situation_id === 8) selected @endif>新居祝い</option>
        <option value="9" @if ($gift->situation_id === 7) selected @endif>お中元</option>
        <option value="10" @if ($gift->situation_id === 8) selected @endif>その他</option>
      </select>
    </div>
    <div>
      <input type="hidden" name="_method" value="patch">
      <input type="submit" value="更新">
    </div>
  </form>
@endsection
