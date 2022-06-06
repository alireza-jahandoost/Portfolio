<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWorkExperienceRequest;
use App\Http\Requests\UpdateWorkExperienceRequest;
use App\Models\WorkExperience;
use Inertia\Inertia;

class WorkExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreWorkExperienceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWorkExperienceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function show(WorkExperience $workExperience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Inertia\Response
     */
    public function edit()
    {
        return Inertia::render('AdminPanel/WorkExperiences/Edit', [
            'workExperiences' => WorkExperience::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWorkExperienceRequest  $request
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateWorkExperienceRequest $request)
    {
        $data = $request->validated();

        WorkExperience::whereNotNull('id')->delete();

        foreach($data['work_experiences'] as $work_experience){
            if(!$work_experience['is_working'] && !isset($work_experience['end'])){
                abort(403);
            }
        }

        foreach($data['work_experiences'] as $workExperience){
            WorkExperience::create($workExperience);
        }

        session()->flash('message', 'Work experiences have been updated successfully');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkExperience $workExperience)
    {
        //
    }
}
