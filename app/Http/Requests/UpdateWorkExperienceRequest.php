<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWorkExperienceRequest extends FormRequest
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
            'work_experiences' => 'required|array',
            'work_experiences.*.start' => 'required|date',
            'work_experiences.*.is_working' => 'required|boolean',
            'work_experiences.*.end' => 'nullable|date|after:work_experiences.*.start|exclude_if:work_experiences.*.is_working,true',
            'work_experiences.*.company_name' => 'required|string|max:255',
            'work_experiences.*.role' => 'required|string|max:255',
        ];
    }
}
