import React, {useContext} from "react"
import AuthContext from "../../context/AuthContext";


function SearchBar(props){

    let {setSearch, setLocation, search, location, restaurantSearch} = useContext(AuthContext)
    
    function Submit(e){
        e.preventDefault()
        restaurantSearch(search, location)
    }

    return(
    <form onSubmit={Submit}>
        <div className="flex">
            <span className="rounded-l-lg inline-flex items-center px-3 text-sm text-white bg-cyan-800">
            Search
            </span>
            <input 
                onChange={(e) => setSearch(e.target.value)}
                type="text" 
                placeholder="Search" 
                className="pl-1 "
            />
            <span className="inline-flex items-center px-3 text-md text-white bg-cyan-800">
            Location
            </span>
            <select 
                onChange={(e) => setLocation(e.target.value)}
                name="location"
                className="rounded-r-lg pl-1 "
            >
                <option value="">Anywhere</option>
                <option value="Midtown">Midtown</option>
                <option value="Poncey-Highlands">Poncey-Highlands</option>
                <option value="Old Fourth Ward">Old Fourth Ward</option>
                <option value="Virginia Highlands">Virginia Highlands</option>
                <option value="Inman park">Inman park</option>
                <option value="Home Park">Home Park</option>
                <option value="Downtown">Downtown</option>
                <option value="West Midtown">West Midtown</option>
                <option value="Buckhead">Buckhead</option>
                <option value="Grant Park">Grant Park</option>
                <option value="Cabbagetown">Cabbagetown</option>
                <option value="Decatur">Decatur</option>
                <option value="Scottdale">Scottdale</option>
                <option value="Buford Highway">Buford Highway</option>
                <option value="Reynoldstown">Reynoldstown</option>
            </select>
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