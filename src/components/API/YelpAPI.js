import {useState, useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'

function YelpAPI(search, location){
    
    
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({search, location});
    console.log(searchParams.search)
    
    const config = {
      params:{
        term: searchParams.search,
        location: searchParams.location
      }
    }
    
    axios.get()

    return [businesses, amountResults, searchParams, setSearchParams]
}

export default YelpAPI;