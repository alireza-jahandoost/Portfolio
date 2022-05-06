<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserProfileRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * edit user's info
     *
     * @return Response
     */
    public function edit(): Response
    {
        return Inertia::render('AdminPanel/User/Edit');
    }

    public function update(UpdateUserProfileRequest $request){
        $data  = $request->validated();

        auth()->user()->name = $data['name'];
        auth()->user()->email = $data['email'];
        auth()->user()->about_me = $data['about_me'];

        if(isset($data['image'])){
            auth()->user()->image = $request->file('image')->store('profileImages');
        }

        auth()->user()->save();

        return back();
    }
}
