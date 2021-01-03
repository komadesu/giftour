<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function user(Request $request) {
        return $request->user();
    }

    public function store(Request $request)
    {
      if ($request->password_confirm !== $request->password) {
          $jsonError=response()->json(['Error Message' => 'パスワードと確認パスワードが違います'], 400);
          return \Response::json($jsonError);
      }

      $valid = validator($request->only('email', 'age', 'gender', 'name', 'password'), [
          'name' => 'required|string|max:255|unique:users',
          'age' => 'required', 'integer', 'max:120',
          'gender' => 'required', 'string', 'max:120',
          'email' => 'required|string|email|max:255|unique:users',
          'password' => 'required|string|min:6',
      ]);

      if ($valid->fails()) {
          $jsonError=response()->json($valid->errors()->all(), 400);
          return \Response::json($jsonError);
      }

      $data = request()->only('name', 'age', 'gender', 'email', 'password');

      $user = User::create([
          'name' => $data['name'],
          'age' => $data['age'],
          'gender_id' => $data['gender'],
          'email' => $data['email'],
          // 'password' => bcrypt($data['password'])
          'password' => Hash::make($data['password'])
      ]);

      $request->request->add([
          'username' => $data['email'],
          'password' => $data['password'],
      ]);

      // Fire off the internal request.
      $token = Request::create(
          'oauth/token',
          'POST'
      );
      return \Route::dispatch($token);
    }
}
