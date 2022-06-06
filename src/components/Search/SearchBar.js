import React, {useState} from "react"


function SearchBar(props){
    const [search, setSearch] = useState(null);
    const [location, setLocation] = useState(null);

    return(
        <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Search
            </span>
            <input 
                type="text" 
                placeholder="Search" 
                className="pl-1 border border-black"
            />
            <span className="inline-flex items-center px-3 text-md text-black bg-slate-300 border border-r-0 border-gray-300">
            Location
            </span>
            <input type="text" placeholder="Location"className="pl-1 border border-black"/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    )
}

export default SearchBar;