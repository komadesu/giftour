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

   // 〇〇モデルとのリレーションを記述する
    //public function gifts()
    //{
    //    return $this->belongsTo('App\Models\Gift');
    //}
}
