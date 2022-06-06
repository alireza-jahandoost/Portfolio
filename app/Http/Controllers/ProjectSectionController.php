<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectSectionRequest;
use App\Http\Requests\UpdateProjectSectionRequest;
use App\Models\Project;
use App\Models\ProjectSection;
use Inertia\Inertia;

class ProjectSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $projectSections = ProjectSection::where('user_id', auth()->id())->withCount('projects')->get();
        return Inertia::render('AdminPanel/ProjectSections/Index', [
            'projectSections' => $projectSections,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('AdminPanel/ProjectSections/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProjectSectionRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreProjectSectionRequest $request)
    {
        $data = $request->validated();

        auth()->user()->projectSections()->create($data);

        session()->flash('message', 'Project section has been created successfully');

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ProjectSection $projectSection
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectSection $projectSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\ProjectSection $projectSection
     * @return \Inertia\Response
     */
    public function edit(ProjectSection $projectSection)
    {
        return Inertia::render('AdminPanel/ProjectSections/Edit', [
            'projectSection' => $projectSection,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProjectSectionRequest $request
     * @param \App\Models\ProjectSection $projectSection
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateProjectSectionRequest $request, ProjectSection $projectSection)
    {
        $data = $request->validated();

        $projectSection->update($data);

        session()->flash('message', 'Project section has been updated successfully');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ProjectSection $projectSection
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ProjectSection $projectSection)
    {
        if ($projectSection->projects->count() === 0) {
            $projectSection->delete();
        }

        session()->flash('message', 'Project section has been deleted successfully');

        return back();
    }

    /**
     * Show projects of a project section
     *
     * @param ProjectSection $projectSection
     * @return \Inertia\Response
     */
    public function index_projects(ProjectSection $projectSection)
    {
        $projectSection->load('projects');
        return Inertia::render('AdminPanel/ProjectSections/IndexProjects', [
            'projectSection' => $projectSection,
        ]);
    }

    public function move_project_up(ProjectSection $projectSection, Project $project)
    {
        if ($project->project_section_id !== $projectSection->id || $project->order === 1) {
            abort(403);
        }

        $prevProject = $projectSection->projects()->where('order', $project->order - 1)->first();

        $prevProject->increment('order');
        $prevProject->save();

        $project->decrement('order');
        $project->save();

        session()->flash('message', 'Project\'s order has been changed successfully');

        return back();
    }

    public function move_project_down(ProjectSection $projectSection, Project $project)
    {
        if ($project->project_section_id !== $projectSection->id || $project->order === $projectSection->projects()->count()) {
            abort(403);
        }

        $nextProject = $projectSection->projects()->where('order', $project->order + 1)->first();

        $nextProject->decrement('order');
        $nextProject->save();

        $project->increment('order');
        $project->save();

        session()->flash('message', 'Project\'s order has been changed successfully');

        return back();
    }
}
