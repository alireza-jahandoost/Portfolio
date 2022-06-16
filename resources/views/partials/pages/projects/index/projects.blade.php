<section>
    <div class="grid gap-y-8">
        @foreach($projects as $project)
            @if($loop->iteration%2==1)
                <div class="grid gap-y-8 sm:grid-cols-2">
                    @endif
                    <div class="flex justify-center">
                        <x-project :project="$project"></x-project>
                    </div>
                    @if($loop->iteration%2==0 || $loop->last)
                </div>
            @endif
        @endforeach
    </div>
</section>
