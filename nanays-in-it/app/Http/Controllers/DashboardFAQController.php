<?php
namespace App\Http\Controllers;

use App\Models\FAQ;
use App\Http\Requests\StoreFAQRequest;
use App\Http\Requests\UpdateFAQRequest;
use App\Http\Resources\FAQResource;

class DashboardFAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::all();
        return inertia("DashboardFAQs/Index", [
            "faqs" => FAQResource::collection($faqs),
            "successMessage" => session('success'),
        ]);
    }

    public function create()
    {
        return inertia("DashboardFAQs/Create");
    }

    public function store(StoreFAQRequest $request)
    {
        $data = $request->validated();
        FAQ::create($data);

        return to_route('faqs.index')
            ->with('success', 'FAQ was created');
    }

    public function show(FAQ $faq)
    {
        return new FAQResource($faq);
    }

    public function edit(FAQ $faq)
    {
        return inertia("DashboardFAQs/Edit", [
            'faq' => new FAQResource($faq)
        ]);
    }

    public function update(UpdateFAQRequest $request, FAQ $faq)
    {
        {
            $data = $request->validated();

            $faq->update($data);

            return to_route('faqs.index')
                ->with('success', "\"$faq->question\" was updated");
        }
    }

    public function destroy(FAQ $faq)
    {
        $name = $faq->question;
        $faq->delete();
        return to_route('faqs.index')
            ->with('success', "\"$name\" was deleted");
    }
}