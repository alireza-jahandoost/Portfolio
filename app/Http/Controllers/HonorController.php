<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHonorRequest;
use App\Http\Requests\UpdateHonorRequest;
use App\Models\Honor;

class HonorController extends Controller
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
     * @param  \App\Http\Requests\StoreHonorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHonorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Honor  $honor
     * @return \Illuminate\Http\Response
     */
    public function show(Honor $honor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Honor  $honor
     * @return \Illuminate\Http\Response
     */
    public function edit(Honor $honor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHonorRequest  $request
     * @param  \App\Models\Honor  $honor
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHonorRequest $request, Honor $honor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Honor  $honor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Honor $honor)
    {
        //
    }
}
