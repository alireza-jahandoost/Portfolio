<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserProfileRequest;
use Illuminate\Support\Facades\Storage;
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

    public function update(UpdateUserProfileRequest $request)
    {
        $data = $request->validated();

        auth()->user()->name = $data['name'];

        auth()->user()->email = $data['email'];

        if (isset($data['about_me'])) {
            auth()->user()->about_me = $data['about_me'];
        } else {
            auth()->user()->about_me = "";
        }

        if (isset($data['contact_me'])) {
            auth()->user()->contact_me = $data['contact_me'];
        } else {
            auth()->user()->contact_me = "";
        }

        if (isset($data['about_me_title'])) {
            auth()->user()->about_me_title = $data['about_me_title'];
        } else {
            auth()->user()->about_me_title = "";
        }

        if (isset($data['image'])) {
            auth()->user()->image = $request->file('image')->store('profileImages');
        }

        auth()->user()->save();

        session()->flash('message', 'User Information has been updated successfully');

        return back();
    }

    public function delete_image()
    {
        $imagePath = auth()->user()->image;

        if (Storage::exists($imagePath)) {
            Storage::delete($imagePath);
        }

        auth()->user()->image = null;
        auth()->user()->save();

        auth()->user()->save();

        session()->flash('message', 'User image has been deleted successfully');

        return back();
    }
}
