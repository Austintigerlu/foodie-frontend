import { createContext, useState} from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({children}) {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null) 
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null) 
    let navigate = useNavigate();
    
    const URL = process.env.REACT_APP_YELP_API + "api/"
    
    let registerUser = async(e) => {
        e.preventDefault()
        let response = await fetch(URL+'users/register/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value, 
                'password': e.target.password.value,
                'email': e.target.email.value,
                'first_name': e.target.first_name.value,
                'last_name': e.target.last_name.value,
            })
        })
        let data = await response.json()
        if(response.status === 201){
            navigate('/login')
        } else{
            console.log('ERROR')
        }
    }

    let loginUser = async(e) => {
        e.preventDefault()
        let response = await fetch(URL+'users/login/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        } else{
            console.log('ERROR')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1)
    const [pageAmmount, setPageAmmount] = useState(0)

    function restaurantSearch(search, location){
        const urlEncodedSearch = encodeURI(search);
        const urlEncodedLocation = encodeURI(location);
        navigate(`/search?find_desc=${urlEncodedSearch}&find_loc=${urlEncodedLocation}&page=1`);
    }
    
    let contextData = {
        loginUser: loginUser,
        authTokens: authTokens,
        user: user,
        logoutUser: logoutUser,
        registerUser: registerUser,
        search: search,
        setSearch: setSearch,
        setLocation: setLocation,
        location: location,
        restaurantSearch: restaurantSearch,
        page:page,
        setPage:setPage,
        setPageAmmount:setPageAmmount,
        pageAmmount: pageAmmount
    }


    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
