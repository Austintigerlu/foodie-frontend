import React, {useState, useEffect} from "react"
import SearchFilter from "../components/Search/Searchfilter"
import Results from "../components/Search/Results"
import {useLocation} from "react-router-dom"
import YelpAPI from "../components/API/YelpAPI"
import axios from "axios"

function SearchPage(props){

    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const search = params.get('find_desc');
    const locationParams = params.get('find_loc');
    // const [businesss, amountResults, searchParams, setSearchParams] = YelpAPI(search, locationParams);
    

    return(
        <div className="">
            <SearchFilter search={search} location={locationParams}/>
            <Results />
        </div>
    )
}

export default SearchPage;