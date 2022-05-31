<?php

namespace App\Http\Controllers;

use App\Models\LandingPage;
use Illuminate\Http\Request;

class MainPagesController extends Controller
{
    public function landingPage(){
        return view('landing', [
            'landingPage' => LandingPage::first(),
        ]);
    }
}
