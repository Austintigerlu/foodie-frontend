import React from "react"
import Rating from "../extra/Rating"


function Result(props){
    const business = props.business
    const address = business.address.split(",")

    return(
        <div className="flex max-w-full overflow-x-auto shadow-lg border-2 border-cyan-800 rounded-lg">
            <div className="max-w-md content-center justify-items-center">
            <img className="w-64 rounded-l-md h-64 object-cover" src={business.image} alt="Business Img"/>
            </div>
            <div className="ml-5 max-w-lg p-2.5">
                <h2 className="text-2xl font-bold mb-3">{business.name}</h2>
                    <Rating business={business}/>
                <p>{business.price}
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 ml-1 mr-1">
                    {business.category}</span>
                </p>
                <div className="mt-5">
                    <p>{business.description}</p>
                </div>
            </div>
            <div className="ml-10 w-48 border-l-2 border-cyan-800 p-2.5">
                <p className="text-right">{address[0]}</p>
                <p className="text-right">{address[1]}</p>
            </div>
        </div>
    )
}

export default Result;