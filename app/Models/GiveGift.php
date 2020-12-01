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

    public function users() {
      return $this->belongsToMany('App\User', 'give_gift_bookmarks')
                  ->as('bookmarks');
    }

    public function gender() {
      return $this->belongsTo('App\Models\Gender', 'getter_gender_id');
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
