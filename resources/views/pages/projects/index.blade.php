<x-layouts.main>

    <x-slot name="headerSlot">
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.27.1/slimselect.min.css">

        <style>
            .ss-value {
                background-color: #4b5563 !important;
            }
        </style>
    </x-slot>

    <div class="grid gap-y-8">
        @include('partials.general.navbar')
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            @include('partials.projects.header')
            @include('partials.projects.projects')
        </div>
    </div>

    <x-slot name="scriptSlot">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.27.1/slimselect.min.js"></script>
        <script>
            new SlimSelect({
                select: '#projectSectionSelector'
            });

            new SlimSelect({
                select: '#skillSelector'
            })
        </script>
    </x-slot>
</x-layouts.main>
