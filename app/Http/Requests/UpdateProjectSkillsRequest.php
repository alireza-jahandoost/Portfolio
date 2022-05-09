<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectSkillsRequest extends FormRequest
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
            'removed_skills' => 'nullable|array',
            'removed_skills.*' => 'required|integer|exists:skills,id',
            'new_skills' => 'nullable|array',
            'new_skills.*' => 'required|integer|exists:skills,id',
        ];
    }
}
