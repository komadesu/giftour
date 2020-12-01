<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    //
    protected $table = 'images';

    protected $guarded = array('id');

    public $timestamps = true;

    public function giveGift() {
      return $this->hasOne('App\Models\GiveGift');
    }

    public function getGift() {
      return $this->hasOne('App\Models\GetGift');
    }
}
