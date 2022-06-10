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
                        <x-project-link :href="$project->link_to_github" link-label="Github repository of project"
                                        icon-classes="fa-brands fa-github"></x-project-link>
                    @endif
                    @if($project->link_to_production)
                        <x-project-link :href="$project->link_to_production" link-label="Site of project"
                                        icon-classes="fa-solid fa-globe"></x-project-link>
                    @endif
                </div>
                @include('partials.pages.projects.show.project-images')
                <div class="">
                    @markdown($project->description)
                </div>
            </div>
        </div>
    </div>
</x-layouts.main>