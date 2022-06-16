<a href="{{route('main.projects.show', [$project])}}">
    <section>
        <div class="w-52 md:w-60 lg:w-80 xl:w-96 text-center hover:-translate-y-2 duration-200 group">
            <div class="w-52 h-52 md:w-60 md:w-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gray-400 rounded-md border">
                @if(count($project->images) > 0)
                    <img src="/{{$project->images[0]->image_url}}"
                         title="{{$project->images[0]->image_title}}"
                         alt="{{$project->images[0]->image_alt}}"
                         class="w-full h-full rounded-md grayscale group-hover:grayscale-0"/>
                @endif
            </div>
            <header>
                <h6 class="text-black text-md md:text-lg font-bold mt-2">{{$project->title}}</h6>
            </header>
            <p class="overflow-2-line text-sm md:text-md text-gray-500 font-mono">{{$project->description}}</p>
        </div>
    </section>
</a>
