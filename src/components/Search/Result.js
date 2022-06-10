import React from "react"
import Rating from "../extra/Rating"


function Result(props){
    const business = props.business
    console.log(business)
    return(
        <div className="flex">
            <img className="rounded-lg w-64 h-64" src={business.image} alt="Business Img"/>
            <div className="ml-2">
                <h2>{business.name}</h2>
                    <Rating rating={business.rating}/>
                <p>{business.price}
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 ml-1 mr-1">
                    {business.category}</span>
                </p>
            </div>
            <div className="ml-10">
                <p>{business.address}</p>
            </div>
        </div>
    )
}

export default Result;