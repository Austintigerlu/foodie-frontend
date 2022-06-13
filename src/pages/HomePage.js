import React from "react"

import CarouselComponent from "../components/extra/Carousel";
import logo from "../components/img/Foodie-logos_transparent.png"
import Results from "../components/Search/Results";

function HomePage(props){

    return(
        <div>
            <div className="flex justify-center items-center mb-5">
                <div className="-z-10">
                    <CarouselComponent/>
                    <div className="absolute top-0 z-0 left-1/2 -translate-x-1/2 ">
                        <img className="h-96 w-96" src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-5">
                <h1 className="text-5xl font-bold">Atlanta's Restaurant Guide</h1>
            </div>
            <hr/>
            <Results/>
        </div>
    )
}

export default HomePage;