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

    public function users() {
      return $this->belongsToMany('App\User', 'get_gift_bookmarks')
                  ->as('bookmarks');
    }

    public function gender() {
      return $this->belongsTo('App\Models\Gender', 'giver_gender_id');
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
