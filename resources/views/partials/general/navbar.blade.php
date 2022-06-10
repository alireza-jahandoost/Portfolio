<nav aria-label="Navbar for desktop users" class="hidden md:block my-6">
    <div class="max-w-screen-2xl mx-auto px-4 hidden md:block">
        <div class="flex items-center flex-wrap gap-8 lg:gap-12 text-gray-700 my-4 px-2">
            <div
                class="hover:text-gray-800{{request()->routeIs('main.landing_page') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.landing_page')}}">Home</a>
            </div>
            <div
                class="hover:text-gray-800{{request()->routeIs('main.projects.*') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.projects.index')}}">Projects</a>
            </div>
            <div class="ml-auto hover:text-gray-800 text-lg">
                Alireza Jahandoost
            </div>
        </div>
    </div>
</nav>

<nav aria-label="Navbar for mobile users" class="md:hidden fixed bottom-0 w-full z-40">
    <div class="px-4 md:hidden bg-white shadow-[0_0_10px]">
        <div class="flex justify-around text-gray-700 pb-2 pt-4 px-2">
            <div
                class="hover:text-gray-800{{request()->routeIs('main.landing_page') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.landing_page')}}">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-home text-center text-2xl"></i>
                        <span class="text-xs pt-1">Home</span>
                    </div>
                </a>
            </div>
            <div
                class="hover:text-gray-800{{request()->routeIs('main.projects.*') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.projects.index')}}">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-globe text-center text-2xl"></i>
                        <span class="text-xs pt-1">Projects</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</nav>
