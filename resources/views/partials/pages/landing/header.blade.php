<section>
    <x-header-container>
        <header>
            <h1 class="text-white text-4xl sm:text-5xl lg:text-7xl text-center">@markdown($landingPage->title??"")</h1>
        </header>
        <div class="text-white text-center text-xl sm:text-2xl lg:text-3xl">
            @markdown($landingPage->description??"")
        </div>
    </x-header-container>
</section>
