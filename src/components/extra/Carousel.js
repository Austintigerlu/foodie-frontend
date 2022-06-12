import React, {useState, useEffect} from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import axios from "axios";

function CarouselComponent(props){
    const URL = "http://localhost:8000/restaurants/"
    const [images, setImages] = useState([])

    useEffect(()=> {
        async function fetchRestaurants(){
            const data = await axios.get(URL)
            setImages(data.data)
        }
        fetchRestaurants()
    }, [URL])

    const loaded = () => {
        const mapping = images.map((image, i) => {

            return (
                <div className="realtive h-96 w-full" key={i}>
                    <img className="w-full h-full object-cover mix-blend-overlay" src={image.image}/>
                </div>
            )
        })

        return (
            <div>
                <Carousel showThumbs={false} autoPlay interval={6000} infiniteLoop>
                    {mapping}
                </Carousel>
            </div>
        )
    }
    return images ? loaded() : <h1>Loading</h1>
}

export default CarouselComponent;