{{-- layoutsフォルダのapplication.blade.phpを継承 --}}
@extends('layouts.gift')

{{-- @yield('title')にテンプレートごとにtitleタグの値を代入 --}}
@section('title', 'ギフト一覧')

{{-- application.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  @foreach($gifts as $gift)
    <h4>{{$gift->name}}</h4>
    <p>{{$gift->price}}</p>
  @endforeach
@endsection
