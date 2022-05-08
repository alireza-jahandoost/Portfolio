<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * @property mixed $image_alt
 * @property mixed $image_title
 * @property mixed $image_url
 * @property mixed $project_id
 */
class ProjectImage extends Model
{
    use HasFactory;

    protected static function booted()
    {
        static::deleting(function ($image) {
            if (Storage::exists($image->image_url)) {
                Storage::delete($image->image_url);
            }
        });
    }
}
