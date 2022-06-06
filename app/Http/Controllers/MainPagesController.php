<?php

namespace App\Http\Controllers;

use App\Models\CommunicationWay;
use App\Models\LandingPage;
use App\Models\Project;
use App\Models\ProjectSection;
use App\Models\Skill;
use App\Models\User;

class MainPagesController extends Controller
{
    public function landingPage()
    {
        return view('landing', [
            'landingPage' => LandingPage::first(),
            'user' => User::first(),
            'skills' => Skill::withCount('projects')->get(),
            'projectSections' => ProjectSection::with('projects.images')->get(),
            'communicationWays' => CommunicationWay::all(),
        ]);
    }

    public function projects()
    {
        return view('projects', [
            'projects' => Project::all(),
            'skills' => Skill::all(),
            'projectSections' => ProjectSection::all(),
        ]);
    }
}
