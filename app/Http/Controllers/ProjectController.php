<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Requests\UpdateProjectSkillsRequest;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\ProjectSection;
use App\Models\Skill;
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
        $project->project_section_id = $data['project_section_id'];

        $this->setAttributes($project, $data);
        $project->order = $project->projectSection->projects()->max('order') + 1;

        $project->save();

        $this->createImages($project, $data['images']);

        session()->flash('message', 'Project has been created successfully');

        return back();
    }

    protected function setAttributes(Project $project, array $data)
    {
        $keys = ['title', 'description', 'link_to_github', 'link_to_production'];

        foreach ($keys as $key) {
            if(!in_array($key, array_keys($data))){
                continue;
            }
            $project->$key = $data[$key];
        }
    }

    protected function createImages(Project $project, array $images)
    {
        foreach ($images as $image) {
            $projectImage = new ProjectImage;
            $projectImage->image_title = $image['image_title'];
            $projectImage->image_alt = $image['image_alt'];
            $projectImage->image_url = $image['file']->store('projectImages');
            $projectImage->project_id = $project->id;
            $projectImage->save();
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
     * @return \Inertia\Response
     */
    public function edit(Project $project)
    {
        $project->load('images');
        $project->load('skills');
        return Inertia::render('AdminPanel/Projects/Edit', [
            'project' => $project,
            'projectSections' => ProjectSection::all(),
            'skills' => Skill::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProjectRequest $request
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        // TODO: change the order of projects in a project section
        $data = $request->validated();

        $this->setAttributes($project, $data);
        if($project->project_section_id !== $data['project_section_id']){
            foreach(Project::where('project_section_id', $project->project_section_id)->where('order','>',$project->order)->get() as $nextProject){
                $nextProject->decrement('order');
                $nextProject->save();
            }
            $project->project_section_id = $data['project_section_id'];
            $project->order = $project->projectSection->projects()->max('order') + 1;
        }

        $project->save();

        if (isset($data['new_images'])) {
            $this->createImages($project, $data['new_images']);
        }

        if(isset($data['changed_images'])){
            foreach($data['changed_images'] as $image){
               $imageModel = ProjectImage::find($image['id']);
               $imageModel->image_title = $image['image_title'];
               $imageModel->image_alt = $image['image_alt'];
               $imageModel->save();
            }
        }

        if(isset($data['deleted_images'])){
            foreach($data['deleted_images'] as $imageId){
                $image = ProjectImage::find($imageId);
                $image->delete();
            }
        }

        session()->flash('message', 'Project has been updated successfully');

        return back();
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

        session()->flash('message', 'Project has been deleted successfully');

        return back();
    }

    public function update_skills(UpdateProjectSkillsRequest $request, Project $project){
        $data = $request->validated();

        if($data['removed_skills']){
            foreach($data['removed_skills'] as $removedSkillId){
                $removedSkill = Skill::find($removedSkillId);
                $removedSkill->projects()->detach($project);
            }
        }

        if($data['new_skills']){
            foreach($data['new_skills'] as $newSkillId){
                $newSkill = Skill::find($newSkillId);
                $newSkill->projects()->attach($project);
            }
        }

        session()->flash('message', 'skills of the project has been updated successfully');

        return back();
    }
}
