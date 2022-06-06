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
            'name' => 'required|string|max:50',
            'email' => 'required|email|max:80',
            'about_me' => 'required|string|max:2000',
            'contact_me' => 'required|string|max:1000',
            'about_me_title' => 'required|string|max:1000',
            'image' => 'nullable|image|max:2000',
        ];
    }
}
