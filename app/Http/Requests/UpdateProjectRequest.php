<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
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
            'title' => 'required|string|max:60',
            'description' => 'required|string|max:1200',
            'link_to_github' => 'required|string|max:200',
            'link_to_production' => 'required|string|max:255',
            'project_section_id' => 'required|integer|exists:project_sections,id',
            'new_images' => 'nullable|array',
            'new_images.*.file' => 'required|image|max:3000',
            'new_images.*.image_alt' => 'required|string|max:80',
            'new_images.*.image_title' => 'required|string|max:80',
            'deleted_images' => 'nullable|array',
            'deleted_images.*' => 'required|integer|exists:project_images,id',
            'changed_images' => 'nullable|array',
            'changed_images.*.id' => 'required|integer|exists:project_images,id',
            'changed_images.*.image_title' => 'required|string|max:80',
            'changed_images.*.image_alt' => 'required|string|max:80',
        ];
    }
}
