@if(count($project->images) !== 0)
    <div class="md:float-right pl-6 pb-6">
        <img class="rounded-md w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto"
             src="/{{$project->images[0]->image_url}}"
             alt="{{$project->images[0]->image_alt}}"
             title="{{$project->images[0]->image_title}}"/>
    </div>
@endif
