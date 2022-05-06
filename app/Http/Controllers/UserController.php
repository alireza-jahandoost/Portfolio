<?php

namespace App\Http\Controllers;

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
}
