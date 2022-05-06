<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProjectSectionController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
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
            Route::resource('project_sections', ProjectSectionController::class);
            Route::get('landing_page/edit', [LandingPageController::class, 'edit'])
                ->name('landing_page.edit');
            Route::put('landing_page', [LandingPageController::class, 'update'])
                ->name('landing_page.update');

            Route::get('user_profile/edit', [UserController::class, 'edit'])
                ->name('user_profile.edit');
            Route::put('user_profile', [UserController::class, 'update'])
                ->name('user_profile.update');
        }
    );
