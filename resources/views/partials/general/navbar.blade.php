<nav aria-label="Navbar for desktop users" class="hidden md:block bg-white fixed top-0 w-full shadow-lg z-50">
    <div class="max-w-screen-2xl mx-auto px-4 hidden md:block">
        <div class="flex items-center flex-wrap gap-8 lg:gap-12 text-gray-700 h-20 px-2">
            <div
                class="hover:text-gray-800{{request()->routeIs('main.landing_page') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.landing_page')}}">Home</a>
            </div>
            <div
                class="hover:text-gray-800{{request()->routeIs('main.projects.*') ? " text-gray-800 font-bold" : ""}}">
                <a href="{{route('main.projects.index')}}">Projects</a>
            </div>
            @if($user->cv)
                <div
                    class="hover:text-gray-800">
                    <a href="{{"/" . $user->cv}}" target="_blank">CV</a>
                </div>
            @endif
            <div class="ml-auto hover:text-gray-800 text-lg">
                {{$user->name}}
            </div>
        </div>
    </div>
</nav>

<nav aria-label="Navbar for mobile users" class="md:hidden fixed bottom-0 w-full h-16 z-40">
    <div class="px-4 md:hidden bg-white shadow-[0_0_10px] h-full">
        <div class="flex justify-around items-center text-gray-700px-2 h-full">
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
            @if($user->cv)
                <div
                    class="hover:text-gray-800">
                    <a href="{{"/" . $user->cv}}" target="_blank">
                        <div class="flex flex-col">
                            <i class="fa-solid fa-note-sticky text-center text-2xl"></i>
                            <span class="text-xs pt-1 text-center">CV</span>
                        </div>
                    </a>
                </div>
            @endif
        </div>
    </div>
</nav>
