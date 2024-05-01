<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo',
        'description', // Add new columns to the $fillable array
        'goal',        // Add new columns to the $fillable array
    ];
    // Define the relationship with board of advisors
    public function boardOfAdvisors()
    {
        return $this->hasMany(BoardOfAdvisors::class);
    }
}