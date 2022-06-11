<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHonorRequest extends FormRequest
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
            'honors' => 'array',
            'honors.*.title' => 'required|string|max:255',
            'honors.*.date' => 'required|date',
            'honors.*.description' => 'required|string|max:65000',
        ];
    }
}
