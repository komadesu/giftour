<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiveGift extends Model
{
    //
    protected $casts = [
      'name' => 'string',
      'price' => 'integer',
      'brand' => 'string',
      'image_id' => 'integer',
      'category_id' => 'integer',
      'getter_gender_id' => 'integer',
      'getter_age' => 'integer',
      'relationship_id' => 'integer',
      'situation_id' => 'integer',
    ];

    public function user() {
      return $this->belongsTo('App\User');
    }

    public function image() {
      return $this->belongsTo('App\Models\Image');
    }

    public function gender() {
      return $this->belongsTo('App\Models\Gender', 'getter_gender_id');
    }
}
