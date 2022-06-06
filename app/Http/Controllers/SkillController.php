<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('AdminPanel/Skills/Index', [
            'skills' => auth()->user()->skills,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('AdminPanel/Skills/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSkillRequest $request
     * @return RedirectResponse
     */
    public function store(StoreSkillRequest $request)
    {
        $data = $request->validated();

        auth()->user()->skills()->create($data);

        session()->flash('message', 'Skill has been created successfully');

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param Skill $skill
     * @return Response
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Skill $skill
     * @return \Inertia\Response
     */
    public function edit(Skill $skill): \Inertia\Response
    {
        return Inertia::render('AdminPanel/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateSkillRequest $request
     * @param Skill $skill
     * @return RedirectResponse
     */
    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $data = $request->validated();

        $skill->update($data);

        session()->flash('message', 'Skill has been updated successfully');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Skill $skill
     * @return RedirectResponse
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();

        session()->flash('message', 'Skill has been deleted successfully');

        return back();
    }
}
