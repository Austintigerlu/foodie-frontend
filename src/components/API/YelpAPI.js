import {useState, useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'

function YelpAPI(search, location){
    const YELP_API = "https://api.yelp.com/v3";
    const YELP_KEY = 'WIjw7whK6t5pfO9jF-rRMpHI7SegX2G2Ji1jTt9PXf2tb7FK4kfJz8cZXd6KWwxof_3rxCQ573M0aQ7ghxoGQ6lLixFdr45C3BLBf24LmL5mdvLWuNPJv2FLpXKeYnYx'
    
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({search, location});
    console.log(search, location)
    const config = {
        headers:{
            Authorization: `Bearer ${YELP_KEY}`,
            
        },
        params: {
            term: search,
            location: location,

        }
    }


    useEffect(()=>{
        setBusinesses([]);
        axios.get(`${YELP_API}/business/search`, config)
            .then((response) => {
                console.log(response)
            })
    }, [searchParams]);

    return [businesses, amountResults, searchParams, setSearchParams]
}

export default YelpAPI;