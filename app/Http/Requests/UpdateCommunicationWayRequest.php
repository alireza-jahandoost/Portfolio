<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCommunicationWayRequest extends FormRequest
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
            'communication_ways' => 'array',
            'communication_ways.*.name' => 'string|max:255',
            'communication_ways.*.value' => 'string|max:255',
            'communication_ways.*.icon_class' => 'string|max:255',
        ];
    }
}
