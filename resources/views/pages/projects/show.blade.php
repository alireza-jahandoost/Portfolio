<x-layouts.main>
    <div class="grid gap-y-8">
        @include('partials.general.navbar')
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            @include('partials.pages.projects.show.header')
        </div>
        <div class="px-8 my-4">
            <div class="">
                <div class="mb-4">
                    @if($project->link_to_github)
                        <a href="{{$project->link_to_github}}"
                           class="text-xl flex gap-1 items-center text-gray-700 hover:text-gray-800 active:text-gray-900"
                           title="github repository">
                            <i class="fa-brands fa-github"></i>
                            <span class="">Github repository of project</span>
                        </a>
                    @endif
                    @if($project->link_to_production)
                        <a href="{{$project->link_to_production}}"
                           class="text-xl flex gap-1 items-center text-gray-700 hover:text-gray-800 active:text-gray-900"
                           title="github repository">
                            <i class="fa-solid fa-globe"></i>
                            <span class="">site of project</span>
                        </a>
                    @endif
                </div>
                @if(count($project->images) !== 0)
                    <div class="md:float-right pl-6 pb-6">
                        <img class="rounded-md w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto"
                             src="/{{$project->images[0]->image_url}}"
                             alt="{{$project->images[0]->image_alt}}"
                             title="{{$project->images[0]->image_title}}"/>
                    </div>
                @endif
                <div class="">
                    @markdown($project->description)
                </div>
            </div>
        </div>
    </div>
</x-layouts.main>
