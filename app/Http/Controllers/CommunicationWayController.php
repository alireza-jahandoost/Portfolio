<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommunicationWayRequest;
use App\Http\Requests\UpdateCommunicationWayRequest;
use App\Models\CommunicationWay;
use Inertia\Inertia;

class CommunicationWayController extends Controller
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
     * @param  \App\Http\Requests\StoreCommunicationWayRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommunicationWayRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CommunicationWay  $communicationWay
     * @return \Illuminate\Http\Response
     */
    public function show(CommunicationWay $communicationWay)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CommunicationWay  $communicationWay
     * @return \Inertia\Response
     */
    public function edit()
    {
        return Inertia::render('AdminPanel/CommunicationWays/Edit', [
            'communicationWays' => CommunicationWay::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommunicationWayRequest  $request
     * @param  \App\Models\CommunicationWay  $communicationWay
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateCommunicationWayRequest $request)
    {
        $data = $request->validated();

        CommunicationWay::whereNotNull('id')->delete();

        foreach($data['communication_ways'] as $communicationWay){
            CommunicationWay::create($communicationWay);
        }

        session()->flash('message', 'Communication ways updated successfully');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommunicationWay  $communicationWay
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommunicationWay $communicationWay)
    {
        //
    }
}
