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
      <p>opponent_gender_id: {{$gift->opponent_gender_id}}</p>
      <p>opponent_age: {{$gift->opponent_age}}</p>
      <p>relationship_id: {{$gift->relationship_id}}</p>
      <p>situation_id: {{$gift->situation_id}}</p>
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
