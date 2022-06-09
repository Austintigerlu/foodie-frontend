import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({children}) {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null) 
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null) 
    let [loading, setLoading] = useState(true)

    let navigate = useNavigate();
    
    const URL = "http://localhost:8000/api/"
    
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
            console.log(user)
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

    let updateToken = async ()=> {

        let response = await fetch(URL+'users/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        loginUser: loginUser,
        authTokens: authTokens,
        user: user,
        logoutUser: logoutUser,
        registerUser: registerUser,
    }

    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let time = 1000 * 60 * 14

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, time)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
