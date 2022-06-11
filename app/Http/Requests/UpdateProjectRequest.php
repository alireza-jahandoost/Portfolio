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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:65000',
            'link_to_github' => 'nullable|string|max:255',
            'link_to_production' => 'nullable|string|max:255',
            'project_section_id' => 'required|integer|exists:project_sections,id',
            'new_images' => 'nullable|array',
            'new_images.*.file' => 'required|image|max:10000',
            'new_images.*.image_alt' => 'required|string|max:255',
            'new_images.*.image_title' => 'required|string|max:255',
            'deleted_images' => 'nullable|array',
            'deleted_images.*' => 'required|integer|exists:project_images,id',
            'changed_images' => 'nullable|array',
            'changed_images.*.id' => 'required|integer|exists:project_images,id',
            'changed_images.*.image_title' => 'required|string|max:255',
            'changed_images.*.image_alt' => 'required|string|max:255',
        ];
    }
}
