<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GetGiftBookmark extends Model
{
    //
    public function user() {
      return $this->belongsTo('App\User');
    }

    public function getGift() {
      return $this->belongsTo('App\Models\GetGift');
    }
}
