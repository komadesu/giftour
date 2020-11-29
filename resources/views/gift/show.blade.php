{{-- layoutsフォルダのapplication.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとの値を代入 --}}
@section('title', 'ギフト詳細')

{{-- application.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <h1>{{$gift->name}}</h1>
  <p>{{$gift->price}}</p>
  <br><br>
  <a href="/gifts/{{$gift->id}}/edit">編集する</a>
  <a href="/gifts">一覧に戻る</a>
@endsection
