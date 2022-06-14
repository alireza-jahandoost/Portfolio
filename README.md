<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<!--   <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Potfolio</h3>

  <p align="center">
      An awesome portfolio site, written with laravel and react
    <br />
    <a href="https://github.com/alireza-jahandoost/Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
<!--     <a href="https://alirezajahandoost.com/">View Website</a> -->
<!--     · -->
    <a href="https://github.com/alireza-jahandoost/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/alireza-jahandoost/Portfolio/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://alirezajahandoost.com)

After some projects, finally, I decided to start my portfolio. I tried to make it as customizable as I can, so that others can use it as well.

The features that are currently supported:
* customizable `About me` and `Contact me` sections
* unlimited number of projects to include
* categorizing projects in project sections
* add unlimited number of skills
* categorizing skills into `Fluented` and `Familiar` categories
* filtering projects by skills or project sections
* search in projects

The features that I want to be added:
* supporting of having a blog
* showing the pdf version of pdf in landing page
* add a form in `Contact me` section to communicate easier
* supporting rtl
* supporting multi languages

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Laravel](https://laravel.com)
* [Tailwindcss](https://tailwindcss.com/)
* [Inertiajs](inertiajs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To run this project in your pc, you need:
* php
* a database server such as mysql
* a web server such as apache
* nodejs and npm, if you want to edit admin panel

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alireza-jahandoost/Portfolio
   ```
2. Move to the directory
   ```sh
   cd Portfolio
   ```
3. Configure `.env` file( you only need to to write database information )
   ```sh
   cp .env.example .env
   ```
4. Install php dependencies
   ```sh
   composer install
   ```
5. Generate key
   ```sh
   php artisan key:generate
   ```
6. Create database tables
   ```sh
   php artisan migrate
   ```
7. Install js dependencies ( if you want to edit styles or admin panel )
   ```sh
   npm install
   npm run watch
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run the project, you need to serve it:
   ```sh
   php artisan serve
   ```
Then, you can login to admin account in `http://localhost:8000/login` url.

username: `admin@admin.com`

password: `password`

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] customizable `About me` and `Contact me` sections
- [x] unlimited number of projects to include
- [x] categorizing projects in project sections
- [x] add unlimited number of skills
- [x] categorizing skills into `Fluented` and `Familiar` categories
- [x] filtering projects by skills or project sections
- [x] search in projects
- [ ] supporting of having a blog
- [ ] showing the pdf version of pdf in landing page
- [ ] add a form in `Contact me` section to communicate easier
- [ ] supporting rtl
- [ ] supporting multi languages

See the [open issues](https://github.com/alireza-jahandoost/Portfolio/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
If you do not have a specific idea, and you want to contribute, you can choose one of the issues and try to complete that one.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Alireza Jahandoost - alireza.jhd2000@gmail.com

Project Link: [https://github.com/alireza-jahandoost/Portfolio](https://github.com/alireza-jahandoost/Portfolio)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alireza-jahandoost/Portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/alireza-jahandoost/Portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alireza-jahandoost/Portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/alireza-jahandoost/Portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/alireza-jahandoost/Portfolio?style=for-the-badge
[stars-url]: https://github.com/alireza-jahandoost/Portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/alireza-jahandoost/Portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/alireza-jahandoost/Portfolio/issues
[license-shield]: https://img.shields.io/github/license/alireza-jahandoost/Portfolio.svg?style=for-the-badge
[license-url]: https://github.com/alireza-jahandoost/Portfolio/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alireza-jahandoost
[product-screenshot]: images/screenshot.png
