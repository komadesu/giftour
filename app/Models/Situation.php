<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Situation extends Model
{
    //
    protected $table = 'situations';

    protected $guarded = 'id';

    public $timestamps = true;

    public function giveGifts() {
      return $this->hasMany('App\Models\GiveGift');
    }

    public function getGifts() {
      return $this->hasMany('App\Models\GetGift');
    }
}
