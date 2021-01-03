<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $table = 'categories';

    protected $guarded = array('id');

    public $timestamps = true;

    // protected $fillable = [
    //    'category', 'created_at', 'updated_at'
    // ];

    public function giveGifts() {
      return $this->hasMany('App\Models\GiveGift');
    }

    public function getGifts() {
      return $this->hasMany('App\Models\GetGift');
    }
}
