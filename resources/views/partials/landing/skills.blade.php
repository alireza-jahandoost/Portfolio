<div class="w-full shadow-[0_0_15px_1px] p-4 shadow-gray-400 md:rounded-xl">
    <h4 class="text-2xl lg:text-3xl font-bold text-center underline">My Skills</h4>
    <div class="lg:w-10/12 xl:w-9/12 mx-auto">
        <div class="flex flex-wrap gap-4 justify-center mt-6">
            @foreach($skills as $skill)
                <a href="{{route('main.projects', ['skills' => [$skill->id]])}}">
                    <div class="bg-gray-600 text-white px-4 py-2 rounded-lg flex flex-col">
                        <div
                            class="text-xs text-gray-200 md:text-sm lg:text-md">
                            {{$skill->is_fluent?"Fluent in" : "Familiar with"}}
                        </div>
                        <div class="flex gap-2 items-baseline">
                            <div class="text-md sm:text-lg md:text-xl lg:text-2xl">{{$skill->name}}</div>
                            <div class="text-sm">{{$skill->projects_count}}</div>
                        </div>
                    </div>
                </a>
            @endforeach
        </div>
    </div>
</div>
