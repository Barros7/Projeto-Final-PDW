<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function getNameAttribute(){
        return $this->attributes['name'];
    }

    public function setNameAttribute($name){
        return $this->attributes['name'] = $name;
    }

    public function subCategory(){
        return $this->belongsTo(Category::class); //sub_category belongs to category model.
    }
}
