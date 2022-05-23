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

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body class="antialiased">
<div class="grid gap-y-8 mb-20 md:mb-0">
    @include('partials.general.navbar')
    <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12">
        <div class="w-full h-[32rem] md:h-[28rem] bg-black md:rounded-3xl"></div>
        <div class="w-full bg-black flex flex-col md:gap-4 p-4 md:px-12 lg:px-20 md:flex-row items-center">
            <div class="w-52 h-52 rounded-full md:rounded-xl md:w-72 md:h-72 bg-gray-500 md:order-1"></div>
            <div class="bg-gray-500 h-52 md:h-72 mt-4 md:mt-0 self-stretch grow"></div>
        </div>
        <div class="w-full bg-black grid lg:grid-cols-2 md:px-24 lg:px-0 gap-2">
            <div class="bg-gray-500 p-2 grid sm:grid-cols-2 gap-2 pt-8">
                <div class="bg-black h-80 rounded-lg"></div>
                <div class="bg-black h-80 rounded-lg"></div>
            </div>
            <div class="bg-gray-500 p-2 grid sm:grid-cols-2 gap-2 pt-8">
                <div class="bg-black h-80 rounded-lg"></div>
                <div class="bg-black h-80 rounded-lg"></div>
            </div>
            <div class="bg-gray-500 p-2 grid sm:grid-cols-2 gap-2 pt-8">
                <div class="bg-black h-80 rounded-lg"></div>
                <div class="bg-black h-80 rounded-lg"></div>
            </div>
            <div class="bg-gray-500 p-2 grid sm:grid-cols-2 gap-2 pt-8">
                <div class="bg-black h-80 rounded-lg"></div>
                <div class="bg-black h-80 rounded-lg"></div>
            </div>
        </div>
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
