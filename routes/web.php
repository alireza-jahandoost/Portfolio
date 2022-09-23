<?php

use App\Http\Controllers\Auth\ChangePasswordController;
use App\Http\Controllers\CommunicationWayController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HonorController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\MainPagesController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectSectionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkExperienceController;
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
            Route::get('project_sections/{project_section}/projects', [ProjectSectionController::class, 'index_projects'])
                ->name('project_sections.index_projects');
            Route::put('project_sections/{project_section}/projects/{project}/up', [ProjectSectionController::class, 'move_project_up'])
                ->name('project_sections.move_project_up');
            Route::put('project_sections/{project_section}/projects/{project}/down', [ProjectSectionController::class, 'move_project_down'])
                ->name('project_sections.move_project_down');

            Route::get('landing_page/edit', [LandingPageController::class, 'edit'])
                ->name('landing_page.edit');
            Route::put('landing_page', [LandingPageController::class, 'update'])
                ->name('landing_page.update');

            Route::get('user_profile/edit', [UserController::class, 'edit'])
                ->name('user_profile.edit');
            Route::put('user_profile', [UserController::class, 'update'])
                ->name('user_profile.update');
            Route::delete('user_profile_image', [UserController::class, 'delete_image'])
                ->name('user_profile.delete_image');
            Route::delete('user_profile_cv', [UserController::class, 'delete_cv'])
                ->name('user_profile.delete_cv');

            Route::get('communication_ways/edit', [CommunicationWayController::class, 'edit'])
                ->name('communication_ways.edit');
            Route::put('communication_ways', [CommunicationWayController::class, 'update'])
                ->name('communication_ways.update');

            Route::get('honors/edit', [HonorController::class, 'edit'])
                ->name('honors.edit');
            Route::put('honors', [HonorController::class, 'update'])
                ->name('honors.update');

            Route::get('work_experiences/edit', [WorkExperienceController::class, 'edit'])
                ->name('work_experiences.edit');
            Route::put('work_experiences', [WorkExperienceController::class, 'update'])
                ->name('work_experiences.update');

            Route::resource('projects', ProjectController::class);
            Route::put('projects/{project}/update_skills', [ProjectController::class, 'update_skills'])
                ->name('projects.update_skills');

            Route::get('settings', [SettingsController::class, 'show'])
                ->name('settings');

            Route::post('change_password', [ChangePasswordController::class, 'store'])
                ->name('change_password.store');
        }
    );

Route::name('main.')->group(function () {
    Route::get('/', [MainPagesController::class, 'landingPage'])
        ->name('landing_page');
    Route::get('/projects', [MainPagesController::class, 'index_projects'])
        ->name('projects.index');
    Route::get('/projects/{project}', [MainPagesController::class, 'show_project'])
        ->name('projects.show');
});
