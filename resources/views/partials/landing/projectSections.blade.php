<div class="w-full grid lg:grid-cols-2 md:px-24 lg:px-0 gap-2">
    @foreach($projectSections as $projectSection)
        @continue(count($projectSection->projects) === 0)
        <div>
            <h4 class="text-center text-2xl underline font-bold">{{$projectSection->name}}</h4>
            <div class="flex justify-around flex-wrap gap-6 px-2 mt-8">
                @foreach($projectSection->projects as $project)
                    @break($loop->iteration > 2)
                    <x-project :project="$project"></x-project>
                @endforeach
            </div>
        </div>
    @endforeach
</div>
