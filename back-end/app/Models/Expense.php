<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
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

    public function getValue(){
        return $this->attributes['value'];
    }

    public function setValue($value){
        return $this->attributes['value'] = $value;
    }

    public function subcategory(){
        return $this->hasMany(Subcategory::class); //search category_id
    }
}
