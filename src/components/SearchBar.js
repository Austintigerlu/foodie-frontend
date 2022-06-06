import React from "react"

function SearchBar(props){
    return(
        <div className="flex">
            <p>Search</p>
            <input type="text" className=""/>
            <p>Near</p>
            <input type="text" className=""/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    )
}

export default SearchBar;