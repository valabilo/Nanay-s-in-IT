<?php
// app/Models/Role.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
protected $primaryKey = 'role_id';

// Define the relationship with users
public function users()
{
return $this->hasMany(User::class, 'role_id', 'role_id');
}
}