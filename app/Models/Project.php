<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * @property int|mixed $order
 * @property mixed $projectSection
 * @property mixed $project_section_id
 */
class Project extends Model
{
    use HasFactory;

    protected static function booted()
    {
        static::deleting(function ($project){
            foreach($project->images as $image){
                if(Storage::exists($image->image_url)){
                    Storage::delete($image->image_url);
                }
                $image->delete();
            }
        });
    }

    /**
     * Relationship between project and its project section
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function projectSection(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(ProjectSection::class);
    }

    /**
     * Relationship between project and its images
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ProjectImage::class);
    }

    /**
     * Relationship between project and its skills
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function skills(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }
}
