<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ProgramController extends Controller
{
    public function index()
    {
        return inertia("Program/Index");
    }
}