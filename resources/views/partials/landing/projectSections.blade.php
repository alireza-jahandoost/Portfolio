<div class="w-full grid lg:grid-cols-2 md:px-24 lg:px-0 gap-2">
    @foreach($projectSections as $projectSection)
        @continue(count($projectSection->projects) === 0)
        <div>
            <h4 class="text-center text-2xl underline font-bold">{{$projectSection->name}}</h4>
            <div class="flex justify-around flex-wrap gap-6 px-2 mt-8">
                @foreach($projectSection->projects as $project)
                    @break($loop->iteration > 2)
                    <div class="w-52 md:w-60 lg:w-52 text-center hover:-translate-y-2 duration-200">
                        <div class="w-52 h-52 md:w-60 md:w-60 lg:w-52 lg:h-52 bg-gray-400 rounded-md">
                            @if(count($project->images) > 0)
                                <img src="/{{$project->images[0]->image_url}}" title="{{$project->images[0]->image_title}}" alt="{{$project->images[0]->image_alt}}" class="w-full h-full rounded-md"/>
                            @endif
                        </div>
                        <h6 class="text-black text-md md:text-lg font-bold mt-2">{{$project->title}}</h6>
                        <p class="overflow-2-line text-sm md:text-md text-gray-500 font-mono">{{$project->description}}</p>
                    </div>
                @endforeach
            </div>
        </div>
    @endforeach
</div>
