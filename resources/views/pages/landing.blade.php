<x-layouts.main>
    <div class="grid gap-y-8">
        @include('partials.general.navbar')
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            @include('partials.landing.header')
            @include('partials.landing.aboutMe')
            @include('partials.landing.skills')
            @include('partials.landing.projectSections')
        </div>
        @include('partials.landing.contactUs')
    </div>
</x-layouts.main>
