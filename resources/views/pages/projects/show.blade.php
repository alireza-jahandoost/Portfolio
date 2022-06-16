<x-layouts.main>

    <x-slot name="metaTags">
        <title>Projects of {{$user->name}} - {{$project->title}}</title>
        <meta name="author" content="{{$user->name}}">

        <meta name="og:title" content="Projects of {{$user->name}} - {{$project->title}}"/>
        @if($user->image)
            <meta name="og:image" content="{{$user->image}}"/>
        @endif
    </x-slot>

    <div class="grid gap-y-8">
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            {{--            @include('partials.pages.projects.show.header')--}}
            <section>
                <div class="px-8 my-4">
                    <div class="lg:flex">
                        <div class="md:float-right lg:float-none lg:order-1 mx-auto">
                            <div class="lg:sticky lg:top-24 lg:mt-8">
                                @include('partials.pages.projects.show.project-images')
                            </div>
                        </div>
                        <div class="">
                            <header>
                                <h1 class="text-4xl sm:text-5xl lg:text-7xl mb-2 mt-4">{{$project->title}}</h1>
                            </header>
                            <div class="flex justify-start gap-3 flex-wrap mx-auto my-8">
                                @foreach($project->skills as $skill)
                                    <div
                                        class="bg-gray-500 font-bold text-white py-2 px-4 rounded-full">{{$skill->name}}</div>
                                @endforeach
                            </div>
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
                            <div class="prose">
                                @markdown($project->description)
                            </div>
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
                    overflow: true,
                }).start();
            </script>
        @endif
    </x-slot>
</x-layouts.main>
