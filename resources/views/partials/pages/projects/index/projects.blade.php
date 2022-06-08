<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8">
    @foreach($projects as $project)
        <div class="flex justify-center">
            <x-project :project="$project"></x-project>
        </div>
    @endforeach
</div>
