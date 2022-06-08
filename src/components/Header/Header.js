import {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProfilePage from "../../pages/ProfilePage";
import Nav from "./Nav";

function Header(props){

    return (
        <header>
            <Nav/>
            <Routes>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </header>
    )
  } 
  
export default Header;