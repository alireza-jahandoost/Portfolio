<section>
    <div class="w-full grid md:px-24 gap-x-2 gap-y-12">
        @foreach($projectSections as $projectSection)
            @continue(count($projectSection->projects) === 0)
            <div>
                <header>
                    <a href="{{route('main.projects.index', ['project_section' => $projectSection->id])}}">
                        <div class="flex justify-center items-center gap-2">
                            <h2 class="text-center text-2xl underline font-bold">{{$projectSection->name}}</h2>
                            @if(count($projectSection->projects)>2)
                                <span
                                    title="{{count($projectSection->projects)-2 . " more project(s) in this section"}}"
                                    class="bg-gray-100 text-black text-sm font-semibold inline-flex items-center p-1.5 rounded-full max-w-min">+{{count($projectSection->projects)-2}}</span>
                            @endif
                        </div>
                    </a>
                </header>
                <div class="flex justify-center flex-wrap gap-6 md:gap-10 lg:gap-16 px-2 mt-8">
                    @foreach($projectSection->projects as $project)
                        @break($loop->iteration > 2)
                        <x-project :project="$project"></x-project>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
</section>
