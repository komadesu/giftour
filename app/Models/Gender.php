<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    //
    public function giveGifts() {
      return $this->hasMany('App\Models\GiveGift', 'getter_gender_id');
    }

    public function getGifts() {
      return $this->hasMany('App\Models\GetGift', 'giver_gender_id');
    }
}
