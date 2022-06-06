import React from "react"
import Result from "./Result"

function Results(props){
    return(
        <div className="flex flex-col items-center mt-5">
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