<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserProfileRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'about_me' => 'nullable|string|max:65000',
            'contact_me' => 'nullable|string|max:65000',
            'about_me_title' => 'nullable|string|max:65000',
            'image' => 'nullable|image|max:10000',
            'cv' => 'nullable|file|max:1000',
        ];
    }
}
