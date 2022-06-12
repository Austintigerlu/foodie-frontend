import React from "react"
import SearchBar from "../components/Search/SearchBar"
import {useNavigate} from "react-router-dom";
import CarouselComponent from "../components/extra/Carousel";
import logo from "../components/img/Foodie-logos_transparent.png"
import Results from "../components/Search/Results";
import './homepage.css'

function HomePage(props){

    return(
        <div>
            <div className="flex justify-center items-center mb-20">
                <div className="-z-10">
                    <CarouselComponent/>
                    <div className="logoHOME">
                        <img className="h-96 w-96" src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
            <Results/>
        </div>
    )
}

export default HomePage;