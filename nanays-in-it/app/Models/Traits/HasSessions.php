<?php
namespace App\Models\Traits;

use App\Models\Session;

trait HasSessions
{
    /**
     * Get the sessions associated with the user.
     */
    public function sessions()
    {
        return $this->hasMany(Session::class);
    }
}