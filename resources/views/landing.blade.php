<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->

    <link href="/css/app.css" rel="stylesheet"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Plus Jakarta Sans', 'Nunito', sans-serif;
        }
    </style>
</head>
<body class="antialiased">
<div class="grid gap-y-8 mb-20 md:mb-0">
    @include('partials.general.navbar')
    <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
        @include('partials.landing.header')
        @include('partials.landing.aboutMe')
        @include('partials.landing.skills')
        @include('partials.landing.projectSections')
        <div class="w-full bg-black flex flex-col py-4">
            <div class="h-52"></div>
            <div class="flex justify-center">
                <div class="grow flex justify-around max-w-lg">
                    <div class="w-12 h-12 rounded-full bg-gray-500"></div>
                    <div class="w-12 h-12 rounded-full bg-gray-500"></div>
                    <div class="w-12 h-12 rounded-full bg-gray-500"></div>
                    <div class="w-12 h-12 rounded-full bg-gray-500"></div>
                </div>
            </div>
        </div>
    </div>

</div>
</body>
</html>
