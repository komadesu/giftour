{{-- layoutsフォルダのgift.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとにtitleタグの値を代入 --}}
@section('title', 'ギフト一覧')

{{-- gift.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <div>
    <a href="{{ route('gifts.create') }}">新規作成</a>
  </div>
  @foreach($gifts as $gift)
    <div style="margin-bottom: 20px; background-color: #ccc;">
      <p>id: {{$gift->id}}</p>
      <h4>name: {{$gift->name}}</h4>
      <p>price: {{$gift->price}}</p>
      <p>brand: {{$gift->brand}}</p>
      <p>image_file_name: {{$gift->image_file_name}}</p>
      <p>category_id: {{$gift->category_id}}</p>
      <p>category: {{$gift->category->category}}</p>
      <p>opponent_gender_id: {{$gift->opponent_gender_id}}</p>
      <p>opponent_gender: {{$gift->gender->gender}}</p>
      <p>opponent_age: {{$gift->opponent_age}}</p>
      <p>relationship_id: {{$gift->relationship_id}}</p>
      <p>relationship: {{$gift->relationship->relationship}}</p>
      <p>situation_id: {{$gift->situation_id}}</p>
      <p>situation: {{$gift->situation->situation}}</p>
      <p>user_id: {{$gift->user_id}}</p>
      <p>created_at: {{$gift->created_at}}</p>
      <p>updated_at: {{$gift->updated_at}}</p>

      <a href="/gifts/{{$gift->id}}">詳細を表示</a>
      <a href="/gifts/{{$gift->id}}/edit">編集する</a>
      <form action="/gifts/{{$gift->id}}" method="POST">
        @csrf
        <input type="hidden" name="_method" value="delete" />
        <input type="submit" name="" value="削除する" />
      </form>
    </div>
  @endforeach
@endsection


{{-- {
  特定のユーザの bookmarks 取得時における gift 一つのデータ構造
  リレーションがこのように付随して入ってる
  "id":2,
  "name":"\u30e9\u30f3\u30cb\u30f3\u30b0\u30b7\u30e5\u30fc\u30ba",
  "price":34731,"brand":"\u30d0\u30fc\u30d0\u30ea\u30fc",
  "image_file_name":"dinner.jpg",
  "category_id":3,"post_flag":2,
  "opponent_gender_id":3,
  "opponent_age":72,
  "relationship_id":8,
  "situation_id":6,
  "user_id":18,
  "created_at":"2020-12-04 16:32:14",
  "updated_at":"2020-12-04 16:32:14",
  "bookmarks":{"user_id":5, "gift_id":2},
  "category":{"id":3, "category":"\u30a2\u30af\u30bb\u30b5\u30ea\u30fc", "created_at":"2020-12-04 16:32:14", "updated_at":"2020-12-04 16:32:14"},
  "relationship":{"id":8, "relationship":"\u305d\u306e\u4ed6", "created_at":"2020-12-04 16:32:14", "updated_at":"2020-12-04 16:32:14"},
  "situation":{"id":6, "situation":"\u30d0\u30ec\u30f3\u30bf\u30a4\u30f3\u30c7\u30fc", "created_at":"2020-12-04 16:32:14", "updated_at":"2020-12-04 16:32:14"}
} --}}
