import React from "react"
import SearchFilter from "../components/Search/Searchfilter"
import Results from "../components/Search/Results"
import {useLocation} from "react-router-dom"


function SearchPage(props){
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchParams = params.get('find_desc');
    const locationParams = params.get('find_loc');

    return(
        <div className="">
            <SearchFilter search={searchParams} location={locationParams}/>
            <Results/>
        </div>
    )
}

export default SearchPage;