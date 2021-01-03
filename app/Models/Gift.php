<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gift extends Model
{
    //
    protected $casts = [
      'name' => 'string',
      'price' => 'integer',
      'brand' => 'string',
      'image_file_name' => 'string',
      'category_id' => 'integer',
      'post_flag' => 'integer',
      'opponent_gender_id' => 'integer',
      'opponent_age' => 'integer',
      'relationship_id' => 'integer',
      'situation_id' => 'integer',
      'user_id' => 'integer',
    ];

    public function user() {
      return $this->belongsTo('App\User');
    }

    public function users() {
      return $this->belongsToMany('App\User', 'bookmarks')
                  ->using('App\Models\Bookmark');
    }

    public function gender() {
      return $this->belongsTo('App\Models\Gender', 'opponent_gender_id');
    }

    public function category() {
      return $this->belongsTo('App\Models\Category');
    }

    public function relationship() {
      return $this->belongsTo('App\Models\Relationship');
    }

    public function situation() {
      return $this->belongsTo('App\Models\Situation');
    }
}
