<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
/**
 * Register any application services.
 *
 * @return void
 */
public function register()
{
    //
}

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
Blade::directive('markdown', function ($expression) {
    return "<?php echo Str::markdown($expression)?>";
});
Blade::directive('firstParagraph', function ($expression) {
return "<?php echo Str::markdown(explode(PHP_EOL, $expression)[0]) ?>";
});
}
}
