<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectSectionRequest;
use App\Http\Requests\UpdateProjectSectionRequest;
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
     * @param  \App\Http\Requests\StoreProjectSectionRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreProjectSectionRequest $request)
    {
        $data = $request->validated();

        auth()->user()->projectSections()->create($data);

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectSection  $projectSection
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectSection $projectSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectSection  $projectSection
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
     * @param  \App\Http\Requests\UpdateProjectSectionRequest  $request
     * @param  \App\Models\ProjectSection  $projectSection
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectSectionRequest $request, ProjectSection $projectSection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectSection  $projectSection
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectSection $projectSection)
    {
        //
    }
}
