<?php

namespace App\Http\Controllers;

use App\Models\CommunicationWay;
use App\Models\Honor;
use App\Models\LandingPage;
use App\Models\WorkExperience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show(){
        return Inertia::render('AdminPanel/Dashboard',[
            'landingPage' => LandingPage::first(),
            'workExperiences' => WorkExperience::all(),
            'communicationWays' => CommunicationWay::all(),
            'honors' => Honor::all(),
        ]);
    }
}
