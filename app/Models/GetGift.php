<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GetGift extends Model
{
    //
    protected $casts = [
      'name' => 'string',
      'brand' => 'string',
      'image_id' => 'integer',
      'category_id' => 'integer',
      'giver_gender_id' => 'integer',
      'giver_age' => 'integer',
      'relationship_id' => 'integer',
      'situation_id' => 'integer',
    ];

    public function user() {
      return $this->belognsTo('App\User');
    }

    public function image() {
      return $this->belongsTo('App\Models\Image');
    }
}
