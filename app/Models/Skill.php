<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_fluent',
        'name',
        'icon_class',
    ];

    protected $casts = [
        'is_fluent' => 'boolean',
    ];
}
