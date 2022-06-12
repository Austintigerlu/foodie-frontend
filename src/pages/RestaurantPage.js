import React, {useState, useEffect, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/extra/Rating';
import Reviews from '../components/extra/Reviews'
import axios from 'axios';
import AuthContext from '../context/AuthContext'

function RestaurantPage(props){
    const navigate = useNavigate();
    const {id} = useParams();
    let {user, authTokens} = useContext(AuthContext)
    const [businesses, setBusinesses] = useState([]);
    const [reviews, setReviews] = useState([]);
    const URL = "http://localhost:8000/restaurants/"

    useEffect(()=> {
        async function fetchRestaurants(){
            const data = await axios.get(URL+id)
            setBusinesses(data.data)
            setReviews(data.data.reviews)
        }
        fetchRestaurants()
    }, [URL])
    const loaded = () =>{
        const mapping = reviews.map((review, i) =>{
            return(
                <div key={i}>
                    <ul>
                        <li>{review.rating}</li>
                        <li>{review.comment}</li>
                        <li>{review.createdAt.substring(0,10)}</li>
                    </ul>
                </div>
            )
        })
        return(
            <>
                {mapping}
            </>
        )
    }
    console.log(user)
    let deleteRestaurant = async(e) => {
        e.preventDefault()
        const context ={
            method: 'DELETE',
            url: URL+id+'/reviews',
            headers: {
                'Authorization': `Bearer ${authTokens.access}`,
            }
        }
        axios.request(context)
            .then(()=> navigate(-1))
            .catch((error)=>console.log(error))
    }
    return(
        <div className='m-5'>
            <button 
                className='bg-transparent hover:bg-orange-400 text-orange-400 hover:text-white border border-orange-400 hover: border-transparent rounded' 
                onClick={()=> navigate(-1)}
                >Go Back
            </button>
            <button className='ml-10'>
                Delete
            </button>
            <div className='grid grid-cols-3'>
                <div>
                <img src={businesses.image} alt={businesses.name}/>
                </div>
                <div className="ml-2">
                <h2>{businesses.name}</h2>
                    <Rating rating={businesses.rating}/>
                <p>{businesses.price}
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 ml-1 mr-1">
                    {businesses.category}</span>
                </p>
            </div>
            <div className="ml-10">
                <p>{businesses.address}</p>
            </div>
            </div>
            <div className='grid grid-cols-3'>
                <h4>Reviews</h4>
                {reviews.length > 0 ? loaded(): <p>No Reviews</p>}
            </div>
                <h4>Write a Review</h4>
                {user ? <Reviews/> : <p>Please login to write a review</p>}
        </div>
    )
}

export default RestaurantPage;