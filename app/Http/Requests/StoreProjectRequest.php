<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
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
            'title' => 'required|string|max:60',
            'description' => 'required|string|max:1200',
            'link_to_github' => 'nullable|string|max:200',
            'link_to_production' => 'nullable|string|max:255',
            'project_section_id' => 'required|integer|exists:project_sections,id',
            'images' => 'array',
            'images.*.file' => 'required|image|max:3000',
            'images.*.image_alt' => 'required|string|max:80',
            'images.*.image_title' => 'required|string|max:80',
        ];
    }
}
