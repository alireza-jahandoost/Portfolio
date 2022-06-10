@if(count($project->images) === 1)
    <div class="md:float-right pl-6 pb-6 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
        <img class="rounded-md w-full h-full"
             src="/{{$project->images[0]->image_url}}"
             alt="{{$project->images[0]->image_alt}}"
             title="{{$project->images[0]->image_title}}"/>
    </div>
@elseif(count($project->images) > 1)
    <div class="mb-6 ml-6 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 md:float-right">
        <div id="image-slider" class="block w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            @foreach($project->images as $image)
                <img data-slidr="{{$image->id}}" class="rounded-md w-full h-full"
                     src="/{{$image->image_url}}"
                     alt="{{$image->image_alt}}"
                     title="{{$image->image_title}}"/>
            @endforeach
        </div>
    </div>
@endif
