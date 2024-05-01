<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Adjust authorization logic as needed
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'logo' => ['nullable', 'file'],
            'description' => 'required|string',
            'goal' => 'required|string',

        ];
    }
}