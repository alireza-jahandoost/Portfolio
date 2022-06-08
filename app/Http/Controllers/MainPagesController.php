<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexProjectsRequest;
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
        return view('pages.landing', [
            'landingPage' => LandingPage::first(),
            'user' => User::first(),
            'skills' => Skill::withCount('projects')->get(),
            'projectSections' => ProjectSection::with('projects.images')->get(),
            'communicationWays' => CommunicationWay::all(),
        ]);
    }

    public function index_projects(IndexProjectsRequest $request)
    {
        $data = $request->validated();

        $search = $data['search'] ?? "";

        $projects = Project::where(fn($query) => $query->where('title', 'LIKE', "%$search%")->orWhere('description', 'LIKE', "%$search%"));

        if (isset($data['skills'])) {
            $projects = $projects->whereHas('skills', fn($query) => $query->whereIn('skills.id', $data['skills']));
        }

        if (isset($data['project_section'])) {
            $projects = $projects->whereHas('projectSection', fn($query) => $query->where('id', $data['project_section']));
        }

        $projects = $projects->paginate();

        return view('pages.projects.index', [
            'projects' => $projects,
            'skills' => Skill::all(),
            'projectSections' => ProjectSection::all(),
        ]);
    }

    public function show_project(Project $project){
        $project->load('skills');
        return view('pages.projects.show', [
            'project' => $project,
        ]);
    }
}
