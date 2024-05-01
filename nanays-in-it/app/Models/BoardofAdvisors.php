<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoardOfAdvisors extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
    ];

    // Define the relationship with company
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}