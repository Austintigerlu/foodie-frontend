import React, {useState} from "react"


function SearchBar(props){
    const [search, setSearch] = useState(props.search || "");
    const [location, setLocation] = useState(props.location || "");

    function Submit(e){
        if(typeof props.restaurantSearch === 'function'){
            props.restaurantSearch(search, location)
        }
        e.preventDefault();
        console.log(search, location)
    }
    return(
    <form onSubmit={Submit}>
        <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Search
            </span>
            <input 
                onChange={(e) => setSearch(e.target.value)}
                type="text" 
                placeholder="Search" 
                className="pl-1 border border-black"
            />
            <span className="inline-flex items-center px-3 text-md text-black bg-slate-300 border border-r-0 border-gray-300">
            Location
            </span>
            <input 
                onChange={(e) => setLocation(e.target.value)}
                type="text" 
                placeholder="Location" 
                className="pl-1 border border-black"
            />
            <div onClick={Submit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    </form>
    )
}

export default SearchBar;