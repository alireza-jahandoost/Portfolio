<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SkillController;
use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
require __DIR__ . '/auth.php';

Route::middleware(['auth', EnsureUserIsAdmin::class])
    ->prefix('admin')
    ->name('admin.')
    ->group(
        function () {
            Route::get('dashboard', [DashboardController::class, 'show'])->name('dashboard');
            Route::resource('skills', SkillController::class);
        }
    );
