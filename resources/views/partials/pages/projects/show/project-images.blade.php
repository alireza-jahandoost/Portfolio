@if(count($project->images) > 0)
    <div
        class="md:ml-6 md:mb-6 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] mx-auto my-4 md:my-0 shadow border rounded-md">
        @if(count($project->images) === 1)
            <img class="rounded-md w-full h-full"
                 src="/{{$project->images[0]->image_url}}"
                 alt="{{$project->images[0]->image_alt}}"
                 title="{{$project->images[0]->image_title}}"/>
        @else
            <div id="image-slider" class="block w-full h-full">
                @foreach($project->images as $image)
                    <img data-slidr="{{$image->id}}" class="rounded-md w-full h-full"
                         src="/{{$image->image_url}}"
                         alt="{{$image->image_alt}}"
                         title="{{$image->image_title}}"/>
                @endforeach
            </div>
        @endif
    </div>
@endif
