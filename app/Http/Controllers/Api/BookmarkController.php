<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Bookmark;
use App\User;

class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource each user saved.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user_id)
    {
        //
        $user = new User;
        $bookmarks = $user->find($user_id)->gifts()->with(['category', 'relationship', 'situation'])->get();

        return response()->json(['data' => $bookmarks]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $user_id = $request->user_id;
        $gift_id = $request->gift_id;

        $bookmark = new Bookmark;
        $bookmark->user_id = $user_id;
        $bookmark->gift_id = $gift_id;

        $bookmark->save();

        return redirect('api/bookmarks');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $user_id = $request->user_id;
        $gift_id = $request->gift_id;

        $bookmark = new Bookmark;

        $bookmark->where([
          ['user_id', $user_id],
          ['gift_id', $gift_id]
        ])->delete();

        return redirect('api/bookmarks');
    }
}
