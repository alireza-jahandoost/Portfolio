<div class="w-52 md:w-60 lg:w-52 text-center hover:-translate-y-2 duration-200 group">
    <div class="w-52 h-52 md:w-60 md:w-60 lg:w-52 lg:h-52 bg-gray-400 rounded-md">
        @if(count($project->images) > 0)
            <img src="/{{$project->images[0]->image_url}}"
                 title="{{$project->images[0]->image_title}}"
                 alt="{{$project->images[0]->image_alt}}"
                 class="w-full h-full rounded-md grayscale group-hover:grayscale-0"/>
        @endif
    </div>
    <h6 class="text-black text-md md:text-lg font-bold mt-2">{{$project->title}}</h6>
    <p class="overflow-2-line text-sm md:text-md text-gray-500 font-mono">{{$project->description}}</p>
</div>
