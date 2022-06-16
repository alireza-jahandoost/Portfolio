<section>
    <div class="w-full grid lg:grid-cols-2 md:px-24 lg:px-0 gap-x-2 gap-y-12">
        @foreach($projectSections as $projectSection)
            @continue(count($projectSection->projects) === 0)
            <div>
                <header>
                    <a href="{{route('main.projects.index', ['project_section' => $projectSection->id])}}">
                        <h2 class="text-center text-2xl underline font-bold">{{$projectSection->name}}</h2>
                    </a>
                </header>
                <div class="flex justify-around flex-wrap gap-6 px-2 mt-6">
                    @foreach($projectSection->projects as $project)
                        @break($loop->iteration > 2)
                        <x-project :project="$project"></x-project>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
</section>
