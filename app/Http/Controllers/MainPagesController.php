<?php

namespace App\Http\Controllers;

use App\Models\LandingPage;
use App\Models\User;
use Illuminate\Http\Request;

class MainPagesController extends Controller
{
    public function landingPage(){
        return view('landing', [
            'landingPage' => LandingPage::first(),
            'user' => User::first(),
        ]);
    }
}
