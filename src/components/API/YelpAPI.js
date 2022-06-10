import {useState, useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'

function YelpAPI(search, location){
    
    
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({search, location});
    console.log(searchParams.search)
    const URL = "http://localhost:8000/restaurants/"
    
    useEffect(()=> {
      async function fetchRestaurants(){
        const data = await axios.get(URL)
        setBusinesses(data)
      }
      fetchRestaurants()
    }, [searchParams])
    
    console.log(businesses)

    return [businesses, amountResults, searchParams, setSearchParams]
}

export default YelpAPI;