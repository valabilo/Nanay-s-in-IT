<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CompaniesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::all();
        return inertia("Company/Index", [
            "companies" => CompanyResource::collection($companies),
            "successMessage" => session('success'),
        ]);
    }

    public function create()
    {
        return inertia("Company/Create");
    }

    public function store(StoreCompanyRequest $request)
    {
        $data = $request->validated();
        $logo = $data['logo'] ?? null;
        if ($logo) {
            $data['logo'] = $logo->store('company/' . Str::random(), 'public');
        }
        Company::create($data);

        return to_route('partner-company.index')
            ->with('success', 'Company was created');
    }

    public function show(Company $company)
    {
        return new CompanyResource($company);
    }

    public function edit(Company $company)
    {
        return inertia("Company/Edit", [
            'company' => new CompanyResource($company)
        ]);
    }

    public function update(UpdateCompanyRequest $request, Company $company)
{
    $data = $request->validated();

    if ($request->hasFile('logo')) {
        // Handle logo upload and update storage path
        $logoPath = $request->file('logo')->store('company/', 'public');
        $data['logo'] = $logoPath;
    }

    $company->update($data);

    return redirect()->route('partner-company.index')
        ->with('success', "{$company->name} was updated successfully");
}

    public function destroy(Company $company)
    {
        $name = $company->name;
        $company->delete();
        if ($company->logo) {
            Storage::disk('public')->deleteDirectory(dirname($company->logo));
        }
        return to_route('partner-company.index')
            ->with('success', "Company \"$name\" was deleted");
    }
}