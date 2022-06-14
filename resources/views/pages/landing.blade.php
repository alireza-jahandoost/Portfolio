<x-layouts.main>

    <x-slot name="metaTags">
        <title>Portfolio of {{$user->name}}</title>
        <meta name="description"
              content="Portfolio of {{$user->name}}, including projects and skills, contact information and about me section"/>
        <meta name="keywords" content="portfolio, Alireza Jahandoost, projects, skills, contact, about"/>
        <meta name="author" content="{{$user->name}}"/>

        <meta name="og:title" content="Portfolio of {{$user->name}}"/>
        <meta name="og:description"
              content="Portfolio of {{$user->name}}, including projects and skills, contact information and about me section"/>
        @if($user->image)
            <meta name="og:image" content="{{$user->image}}"/>
        @endif
    </x-slot>

    <div class="grid gap-y-8">
        <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
            @include('partials.pages.landing.header')
            @include('partials.pages.landing.aboutMe')
            @include('partials.pages.landing.skills')
            @include('partials.pages.landing.projectSections')
        </div>
        @include('partials.pages.landing.contactUs')
    </div>
</x-layouts.main>
