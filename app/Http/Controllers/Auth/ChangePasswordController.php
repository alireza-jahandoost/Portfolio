<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ChangePasswordRequest;
use Illuminate\Http\Middleware\CheckResponseForModifications;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    public function store(ChangePasswordRequest $request){
        $data = $request->validated();

        $user = auth()->user();

        if(Hash::check($data['password'], $user->password)){
            $user->password = bcrypt($data['new_password']);
            $user->save();
            Auth::logoutOtherDevices($data['new_password']);
        }

        return back();
    }
}
