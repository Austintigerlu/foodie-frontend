import Nav from "./Nav";
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthContext";
import LoginNav from "./LoginNav";

function Header(props){
    let {user} = useContext(AuthContext)

    return (
        <header>
            {!user ? <Nav/> : <LoginNav/>}
        </header>
    )
} 

export default Header;