import {Navigate} from 'react-router-dom'
import ProfilePage from '../../pages/ProfilePage'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
function PrivateRoute() {
    let {user} = useContext(AuthContext)
    return(
        <>
        {!user ? <Navigate to='/login'/>: <ProfilePage/>}
        </>
    )
}

export default PrivateRoute