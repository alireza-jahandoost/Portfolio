<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\ProjectSection;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('AdminPanel/Projects/Index', [
            'projects' => Project::with('images')->with('projectSection')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('AdminPanel/Projects/Create', [
            'projectSections' => ProjectSection::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProjectRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        $project = new Project;

        $this->setAttributes($project, $data);
        $project->order = $project->projectSection->projects()->max('order') + 1;

        $project->save();

        foreach ($data['images'] as $image) {
            $projectImage = new ProjectImage;
            $projectImage->image_title = $image['image_title'];
            $projectImage->image_alt = $image['image_alt'];
            $projectImage->image_url = $image['file']->store('projectImages');
            $projectImage->project_id = $project->id;
            $projectImage->save();
        }

        return back();
    }

    protected function setAttributes(Project $project, array $data)
    {
        $keys = ['title', 'description', 'link_to_github', 'link_to_production', 'project_section_id'];

        foreach ($keys as $key) {
            $project->$key = $data[$key];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProjectRequest $request
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return back();
    }
}
