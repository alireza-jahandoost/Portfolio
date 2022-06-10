<x-layouts.main>

    <x-slot name="metaTags">
        <title>Projects of {{auth()->user()->name}} - {{$project->title}}</title>
        <meta name="author" content="Alireza Jahandoost">

        <meta name="og:title" content="Projects of {{auth()->user()->name}} - {{$project->title}}"/>
        @if(auth()->user()->image)
            <meta name="og:image" content="{{auth()->user()->image}}"/>
        @endif
    </x-slot>

    <div class="grid gap-y-8">
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            @include('partials.pages.projects.show.header')
            <section>
                <div class="px-8 my-4">
                    <div class="">
                        <div class="mb-4">
                            @if($project->link_to_github)
                                <x-project-link :href="$project->link_to_github"
                                                link-label="Github repository of project"
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
            </section>
        </div>
    </div>

    <x-slot name="scriptSlot">
        @if(count($project->images) > 1)
            <script src="/js/slidr.min.js"></script>
            <script>
                slidr.create('image-slider', {
                    breadcrumbs: true,
                    keyboard: true,
                    pause: true,
                    touch: true,
                }).start();
            </script>
        @endif
    </x-slot>
</x-layouts.main>
