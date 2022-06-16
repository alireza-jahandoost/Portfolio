<section>
    <div class="w-full flex flex-col md:gap-8 p-4 md:px-12 lg:px-20 md:flex-row items-center">
        <div
            class="min-w-max rounded-full md:rounded-xl bg-gray-500 md:order-1 overflow-hidden">
            <div class="w-52 h-52 md:w-72 md:h-72 xl:w-96 xl:h-96">
                @if($user->image)
                    <img src="/{{$user->image}}" class="w-full h-full"/>
                @endif
            </div>
        </div>
        <div class="mt-4 md:mt-0 self-stretch grow text-center flex flex-col justify-between md:text-left">
            <div class=" w-10/12 sm:w-8/12 md:w-full lg:w-10/12 mx-auto lg:ml-0 h-full flex flex-col gap-y-8 justify-between">
                <header>
                    <h2 class="text-gray-700 text-md">About me</h2>
                </header>
                <div class="prose text-lg sm:text-xl xl:text-3xl font-semibold">@markdown($user->about_me_title??"")</div>
                <div class="prose text-xs sm:text-sm xl:text-lg flex flex-col gap-2">@markdown($user->about_me??"")</div>
            </div>
        </div>
    </div>
</section>
