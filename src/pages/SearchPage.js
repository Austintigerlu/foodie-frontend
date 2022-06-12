import React, {useContext} from "react"
import SearchFilter from "../components/Search/Searchfilter"
import Results from "../components/Search/Results"
import AuthContext from "../context/AuthContext"


function SearchPage(){
    let {search, location} = useContext(AuthContext) 

    return(
        <div className="">
            <SearchFilter search={search} location={location}/>
            <Results/>
        </div>
    )
}

export default SearchPage;