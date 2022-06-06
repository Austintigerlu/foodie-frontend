import React from "react"
import Result from "./Result"

function Results(props){
    return(
        <div className="mt-5">
            <div className="m-5">
                <Result/>
            </div>
            <div className="m-5">
                <Result/>
            </div>
        </div>
    )
}

export default Results;