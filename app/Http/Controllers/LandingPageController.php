<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLandingPageRequest;
use App\Http\Requests\UpdateLandingPageRequest;
use App\Models\LandingPage;

class LandingPageController extends Controller
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
     * @param  \App\Http\Requests\StoreLandingPageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLandingPageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LandingPage  $landingPage
     * @return \Illuminate\Http\Response
     */
    public function show(LandingPage $landingPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LandingPage  $landingPage
     * @return \Illuminate\Http\Response
     */
    public function edit(LandingPage $landingPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLandingPageRequest  $request
     * @param  \App\Models\LandingPage  $landingPage
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLandingPageRequest $request, LandingPage $landingPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LandingPage  $landingPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(LandingPage $landingPage)
    {
        //
    }
}
