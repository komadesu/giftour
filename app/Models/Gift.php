<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gift extends Model
{
    //
    protected $casts = [
      'name' => 'string',
      'price' => 'integer',
      'category_code' => 'string',
      'image_id' => 'integer',
      'opponent_gender' => 'integer',
      'opponent_age' => 'integer',
      'relationship_code' => 'string',
      'situation_code' => 'string',
    ];

}
