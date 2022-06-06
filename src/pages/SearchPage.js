import React from "react"
import SearchFilter from "../components/Search/Searchfilter"
import Results from "../components/Search/Results"
function SearchPage(props){
    return(
        <div>
            <SearchFilter/>
            <Results/>
        </div>
    )
}

export default SearchPage;