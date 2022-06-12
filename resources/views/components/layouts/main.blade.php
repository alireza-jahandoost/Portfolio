<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

{{$metaTags}}

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

    {{$headerSlot ?? ""}}
</head>
<body class="antialiased min-h-screen flex flex-col mb-16 md:mt-20 md:mb-0">

<header>
    @include('partials.general.navbar')
</header>

<main class="grow">
    {{$slot}}
</main>

<footer>
    <div class="bg-black text-white text-center py-2">
        Licensed under <a class="hover:text-blue-600 hover:underline"
                          href="https://github.com/alireza-jahandoost/Portfolio/blob/main/LICENSE">MIT</a>
    </div>
</footer>

{{$scriptSlot ?? ""}}
</body>
</html>
