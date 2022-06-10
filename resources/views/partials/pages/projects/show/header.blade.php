<section>
    <x-header-container>
        <div>
            <header>
                <h1 class="text-white text-4xl sm:text-5xl lg:text-7xl text-center mb-28">{{$project->title}}</h1>
            </header>
            <div class="flex justify-center gap-3 flex-wrap w-11/12 mx-auto md:w-10/12 lg:w-9/12 xl:w-7/12">
                @foreach($project->skills as $skill)
                    <div class="bg-gray-600 text-white p-2 rounded-md">{{$skill->name}}</div>
                @endforeach
            </div>
        </div>
    </x-header-container>
</section>
