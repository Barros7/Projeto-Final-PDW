<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
        'date_time'
    ];

    public function getNameAttribute(){
        return $this->attributes['name'];
    }

    public function setNameAttribute($name){
        return $this->attributes['name'] = $name;
    }

    public function subcategory(){
        return $this->hasMany(Subcategory::class); //search category_id
    }
}
