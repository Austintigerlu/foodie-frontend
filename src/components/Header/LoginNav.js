import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom";
import logo from "../img/Foodie-logos_transparent.png"
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useContext} from 'react'

function LoginNav(){
    const navigate = useNavigate();

    function restaurantSearch(search, location){
        const urlEncodedSearch = encodeURI(search);
        const urlEncodedLocation = encodeURI(location);
        navigate(`/search?find_desc=${urlEncodedSearch}&find_loc=${urlEncodedLocation}`);
    }
    let {logoutUser} = useContext(AuthContext)
    return (
    <>
        <nav className="bg-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/">
                            <img
                                className="h-20 w-20"
                                src={logo}
                                alt="logo"
                            />
                            </Link>
                        </div>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <SearchBar restaurantSearch={restaurantSearch}/>
                        </div>
                        </div>
                        <div className="mr-2 flex items-end space-x-4">
                            <Link to="/profile">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Profile
                                </p>
                            </Link>
                            <Link to="/login">
                                <p onClick={logoutUser} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Logout
                                </p>
                            </Link>
                        </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default LoginNav