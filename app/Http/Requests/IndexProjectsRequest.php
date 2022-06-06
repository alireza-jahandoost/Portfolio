<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IndexProjectsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'skills' => 'nullable|array',
            'skills.*' => 'required|integer|exists:skills,id',
            'project_section' => 'nullable|integer|exists:project_sections,id',
            'search' => 'nullable|string|max:255',
        ];
    }
}
