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

    <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.27.1/slimselect.min.css">

    <style>
        body {
            font-family: 'Plus Jakarta Sans', 'Nunito', sans-serif;
        }

        .ss-value{
            background-color: #4b5563 !important;
        }
    </style>
</head>
<body class="antialiased">
<div class="grid gap-y-8">
    @include('partials.general.navbar')
    <div class="w-full max-w-screen-2xl mx-auto md:px-4 grid gap-12 md:gap-y-16 lg:gap-y-20">
        @include('partials.projects.header')
        @include('partials.projects.projects')
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.27.1/slimselect.min.js"></script>
<script>
    new SlimSelect({
        select: '#projectSectionSelector'
    });

    new SlimSelect({
        select: '#skillSelector'
    })
</script>
</body>
</html>