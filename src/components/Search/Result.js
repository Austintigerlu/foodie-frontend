import React from "react"
import Rating from "../extra/Rating"

function Result(props){
    return(
        <div className="flex">
            <img src="https://via.placeholder.com/150" alt="Business Img"/>
            <div className="ml-2">
                <h2>Place Name</h2>
                    <Rating/>
                <p>$
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 ml-1 mr-1">
                    slate</span>
                </p>
            </div>
            <div className="ml-10">
                <p>Address</p>
                <p>Phone Number</p>
            </div>
        </div>
    )
}

export default Result;