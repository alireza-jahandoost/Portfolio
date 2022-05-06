<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunicationWay extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
        'icon_class',
    ];
}
