import React, {useContext} from "react"
import SearchFilter from "../components/Search/Searchfilter"
import Results from "../components/Search/Results"
import AuthContext from "../context/AuthContext"
import YelpAPI from "../components/API/YelpAPI"
import axios from "axios"

function SearchPage(props){
    let {search, location} = useContext(AuthContext)
    // const [businesss, amountResults, searchParams, setSearchParams] = YelpAPI(search, locationParams);
    

    return(
        <div className="">
            <SearchFilter search={search} location={location}/>
            <Results/>
        </div>
    )
}

export default SearchPage;