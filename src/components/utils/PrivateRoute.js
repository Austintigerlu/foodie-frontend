import {Route, Routes, Navigate} from 'react-router-dom'
import ProfilePage from '../../pages/ProfilePage'

function PrivateRoute({children}) {
    const authenticated = false
    return(
        <Routes>
        <Route path="/" element={<ProfilePage/>}>
            {!authenticated ? <Navigate to='/'/> : children}
        </Route>
        </Routes>
    )
}

export default PrivateRoute