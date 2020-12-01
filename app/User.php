<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function giveGifts() {
      return $this->belongsToMany('App\Models\GiveGift', 'give_gift_bookmarks')
                  ->as('bookmarks');
    }

    public function getGifts() {
      return $this->belongsToMany('App\Models\GetGift', 'get_gift_bookmarks')
                  ->as('bookmarks');
    }

    public function gender() {
      return $this->belongsTo('App\Models\Gender');
    }
}
