import React, {useState, useContext, useEffect} from "react"
import Result from "./Result"
import axios from "axios";
import {Link} from "react-router-dom"
import AuthContext from "../../context/AuthContext";
import PageButtons from "../extra/PageButtons";
function Results(props){
    const [businesses, setBusinesses] = useState([]);


    const URL = process.env.REACT_APP_YELP_API+"restaurants/"
    let {search, location, restaurantSearch, page, setPage, setPageAmmount} = useContext(AuthContext)

    useEffect(()=> {
        async function fetchRestaurants(){
          const data = await axios.get(URL+'?find_desc='+search+'&find_loc='+location+'&page='+page)
          setBusinesses(data.data.restaurants)
          setPage(data.data.page)
          setPageAmmount(data.data.pages)
        }
        fetchRestaurants()
    }, [restaurantSearch, page])


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
                <PageButtons/>
            </div>
        )
    }
    return businesses ? loaded() : <h1>Loading</h1>
}

export default Results;