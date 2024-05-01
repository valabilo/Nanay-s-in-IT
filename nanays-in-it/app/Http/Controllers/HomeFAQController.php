<?php

namespace App\Http\Controllers;

use App\Http\Resources\FAQResource;
use App\Models\FAQ;
use Inertia\Inertia;

class HomeFAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::all();
        return inertia("FAQs/Index", [
            "faqs" => FAQResource::collection($faqs),
        ]);
    }
}
