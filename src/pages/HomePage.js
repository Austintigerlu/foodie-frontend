import React from "react"
import SearchBar from "../components/Search/SearchBar"
import {useNavigate} from "react-router-dom";

function HomePage(props){
    const navigate = useNavigate();

    function restaurantSearch(search, location){
        const urlEncodedSearch = encodeURI(search);
        const urlEncodedLocation = encodeURI(location);
        navigate(`/search?find_desc=${urlEncodedSearch}&find_loc=${urlEncodedLocation}`);
    }
    
    return(
        <div className="flex justify-center mt-20">
            <SearchBar restaurantSearch={restaurantSearch}/>
        </div>
    )
}

export default HomePage;