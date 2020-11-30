<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GetGift extends Model
{
    //
    protected $casts = [
      'name' => 'string',
      'price' => 'integer',
      'brand' => 'string',
      'image_id' => 'integer',
      'category_id' => 'integer',
      'giver_gender_id' => 'integer',
      'giver_age' => 'integer',
      'relationship_id' => 'integer',
      'situation_id' => 'integer',
    ];
}