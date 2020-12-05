{{-- layoutsフォルダのgift.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとの値を代入 --}}
@section('title', 'Gift新規作成')

{{-- gift.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <h2>あげた or もらったプレゼントのレコード新規作成( I gave or I got )</h2>
  <form action="/gifts" method="post" enctype="multipart/form-data">
    {{-- 以下を入れないとエラーになる --}}
    @csrf
    {{-- <input type="hidden" name="post_flag" value="1"> --}}{{-- あげた時にこっちつける --}}
    <input type="hidden" name="post_flag" value="2">{{-- もらった時にこっちつける --}}
    <input type="hidden" name="user" value="7" />{{-- ログイン中のユーザID(React側でこのデータを持たせるかどうかはあとで考える) --}}
    <div>
      <label for="name">ギフト名（あげたもの or もらったもの）</label>
      <input type="text" name="name" placeholder="ギフトの名前を入れる">
    </div>
    {{-- 価格 nullable 対応 ( I got 用) --}}
    <div>
      <label for="price">価格</label>
      <input type="number" name="price" placeholder="ギフトの値段を入れる">
    </div>
    <div>
      <label for="brand">ブランド・メーカー等</label>
      <input type="text" name="brand" placeholder="ブランドの名前を入れる">
    </div>
    <div>
      <label for="image">画像</label>
      <input type="file" name="image">
    </div>
    <div>
      <label for="category">カテゴリー</label>
      <select name="category" id="category">
        <option>選択</option>
        <option value="1">ファッション</option>
        <option value="2">スポーツ・アウトドア</option>
        <option value="3">アクセサリー</option>
        <option value="4">コスメ・健康</option>
        <option value="5">香水・フレグランス</option>
        <option value="6">食品・スイーツ</option>
        <option value="7">インテリア・家具</option>
        <option value="8">本</option>
        <option value="9">財布・小物</option>
        <option value="10">大物</option>
        <option value="11">その他</option>
      </select>
    </div>
    <div>
      <label for="opponent_gender">相手の性別</label>
      <select name="opponent_gender" id="opponent_gender">
        <option>選択</option>
        <option value="1">男性</option>
        <option value="2">女性</option>
        <option value="3">その他</option>
      </select>
    </div>
    <div>
      <label for="opponent_age">相手の年齢</label>
      <select name="opponent_age" id="opponent_age">
        <option>選択</option>
        <option value="1">~19歳</option>
        <option value="2">20~29歳</option>
        <option value="3">30~39歳</option>
        <option value="4">40~49歳</option>
        <option value="5">50~59歳</option>
        <option value="6">60歳~</option>
      </select>
    </div>
    <div>
      <label for="relationship">関係性</label>
      <select name="relationship" id="relationship">
        <option>選択</option>
        <option value="1">夫婦</option>
        <option value="2">恋人</option>
        <option value="3">家族</option>
        <option value="4">兄弟・姉妹</option>
        <option value="5">師弟</option>
        <option value="6">友達</option>
        <option value="7">先輩・後輩</option>
        <option value="8">その他</option>
      </select>
    </div>
    <div>
      <label for="situation">シチュエーション</label>
      <select name="situation" id="situation">
        <option>選択</option>
        <option value="1">記念日</option>
        <option value="2">誕生日</option>
        <option value="3">クリスマス</option>
        <option value="4">結婚式</option>
        <option value="5">入学式・卒業式</option>
        <option value="6">バレンタインデー</option>
        <option value="7">ホワイトデー</option>
        <option value="8">新居祝い</option>
        <option value="9">お中元</option>
        <option value="10">その他</option>
      </select>
    </div>
    <div>
      <input type="submit" value="送信">
    </div>
  </form>
@endsection
