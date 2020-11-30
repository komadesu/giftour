{{-- layoutsフォルダのapplication.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとにtitleタグの値を代入 --}}
@section('title', 'ギフト一覧')

{{-- application.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <div>
    <a href="{{ route('gifts.create') }}">新規作成</a>
  </div>
  @foreach($gifts as $gift)
    <h4>{{$gift->name}}</h4>
    <p>{{$gift->price}}</p>
    <a href="/gifts/{{$gift->id}}">詳細を表示</a>
    <a href="/gifts/{{$gift->id}}/edit">編集する</a>
    <form action="/gifts/{{$gift->id}}" method="POST">
      @csrf
      <input type="hidden" name="_method" value="delete" />
      <input type="submit" name="" value="削除する" />
    </form>
  @endforeach
@endsection
