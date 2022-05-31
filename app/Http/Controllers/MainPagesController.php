<?php

namespace App\Http\Controllers;

use App\Models\LandingPage;
use App\Models\ProjectSection;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;

class MainPagesController extends Controller
{
    public function landingPage(){
        return view('landing', [
            'landingPage' => LandingPage::first(),
            'user' => User::first(),
            'skills' => Skill::withCount('projects')->get(),
            'projectSections' => ProjectSection::with('projects.images')->get(),
        ]);
    }
}
