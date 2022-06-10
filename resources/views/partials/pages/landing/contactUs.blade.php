<section>
    <div class="w-full bg-gradient-to-b from-white to-black/30 flex flex-col py-4 mt-8">
        <div class="h-52 flex flex-col items-center">
            <header>
                <h2 class="text-2xl underline font-bold">Contact Me</h2>
            </header>
            <div class="text-md mt-4 p-2 text-center max-w-2xl text-gray-800">
                {{$user->contact_me}}
            </div>
        </div>
        <div class="flex justify-center">
            <div class="grow flex justify-around max-w-lg">
                @foreach($communicationWays as $communicationWay)
                    <a href="{{$communicationWay->value}}">
                        <div
                            class="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center bg-black text-gray-400 hover:text-lg duration-100">
                            <i class="{{$communicationWay->icon_class}} fa-xl"></i>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
    </div>
</section>
