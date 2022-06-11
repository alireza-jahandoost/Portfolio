<section>
    <x-header-container>
       <header>
           <h1 class="text-white text-4xl sm:text-5xl lg:text-7xl text-center mb-28">Projects</h1>
       </header>
    </x-header-container>
    <div class="bg-gray-50 shadow-lg shadow-gray-400 mx-auto rounded-xl w-11/12 -mt-24 md:-mt-20 lg:-mt-20">
        <form action="{{route('main.projects.index')}}" method="GET">
            <div class="p-4 grid gap-2 lg:w-10/12 mx-auto">
                <div class="grid gap-2 md:grid-cols-2">
                    <div class="grid gap-1">
                        <label for="search"
                               class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="search"
                                   value="{{request()->input('search')}}"
                                   name="search"
                                   class="block pl-10 p-1 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search in projects"/>
                        </div>
                    </div>
                    <div class="grid gap-1">
                        <label class="sr-only" for="projectSectionSelector">Project Section</label>
                        <select id="projectSectionSelector" name="project_section">
                            <option value="" selected>Choose A project section</option>
                            @foreach($projectSections as $projectSection)
                                <option
                                    {{(int)request()->input('project_section') === $projectSection->id ? 'selected="selected"' : ""}} value="{{$projectSection->id}}">{{$projectSection->name}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="grid gap-1 col-span-full">
                        <label for="skillSelector" class="sr-only">Skills</label>
                        <select id="skillSelector" multiple="multiple" name="skills[]">
                            @foreach($skills as $skill)
                                <option {{in_array((string)$skill->id, request()->input('skills')??[]) ? 'selected="selected"' : ""}} value="{{$skill->id}}">{{$skill->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white py-2 px-8 rounded-md">Search
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>
