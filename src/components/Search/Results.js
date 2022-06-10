import React, {useState, useEffect} from "react"
import Result from "./Result"
import axios from "axios";
import {Link} from "react-router-dom"

function Results(props){
    const [businesses, setBusinesses] = useState([]);
    const URL = "http://localhost:8000/restaurants/"

    useEffect(()=> {
        async function fetchRestaurants(){
          const data = await axios.get(URL)
          setBusinesses(data.data)
        }
        fetchRestaurants()
    }, [URL])
    console.log(businesses)

    const loaded = () => {
        const mapping = businesses.map((business, i) => {
            return(
                    <div key={i}className="m-5">
                        <Link to={'/restaurant/' + business.id}>
                            <Result business={business}/>
                            </Link>
                    </div>
            )
        })
        return(
            <div className="flex flex-col items-center mt-5">
                
                {mapping}

            </div>
        )
    }
    return businesses ? loaded() : <h1>Loading</h1>
}

export default Results;