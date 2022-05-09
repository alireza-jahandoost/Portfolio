<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed $projects
 * @property mixed $id
 */
class ProjectSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    /**
     * Relationship between project section and its projects
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projects(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Project::class)->orderBy('order');
    }
}
