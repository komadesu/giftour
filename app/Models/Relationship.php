<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Relationship extends Model
{
    //
    protected $table = 'relationships';

    protected $guarded = array('id');

    public $timestamps = true;

    public function giveGifts() {
      return $this->hasMany('App\Models\GiveGift');
    }

    public function getGifts() {
      return $this->hasMany('App\Models\GetGift');
    }
}
