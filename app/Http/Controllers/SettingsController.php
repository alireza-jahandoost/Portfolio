<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    /**
     * Show settings page
     *
     * @return \Inertia\Response
     */
    public function show(){
        return Inertia::render('AdminPanel/Settings/Show');
    }
}
