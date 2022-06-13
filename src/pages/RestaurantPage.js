import React, {useState, useEffect, useContext} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import Rating from '../components/extra/Rating';
import Reviews from '../components/extra/Reviews'
import axios from 'axios';
import AuthContext from '../context/AuthContext'
import StarRatings from "react-star-ratings"

function RestaurantPage(props){
    const navigate = useNavigate();
    const {id} = useParams();
    let {user, authTokens} = useContext(AuthContext)
    const [businesses, setBusinesses] = useState([]);
    const [reviews, setReviews] = useState([]);

    const URL = process.env.REACT_APP_YELP_API + "restaurants/"
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
            console.log(review)
            return(
                <tr key={i} className='bg-gray-50'>
                    <td className='px-6 py-4'>{review.createdAt.substring(0,10)}</td>
                    <td className='px-6 py-4 flex items-end'>{<StarRatings
                            rating={review.rating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="1px"
                        />}
                    </td>
                    <td className='px-6 py-4'>{review.comment}</td>
                </tr>
            )
        })
        return(
            <>
                {mapping}
            </>
        )
    }

    let deleteRestaurant = async(e) => {
        e.preventDefault()
        const context ={
            method: 'DELETE',
            url: URL+id+'/admin',
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
            <div className='flex'>
                <button 
                    className='bg-orange-400 hover:bg-transparent text-white hover:text-orange-400 border border-orange-400 hover: border-transparent rounded p-1' 
                    onClick={()=> navigate(-1)}
                    >Go Back
                </button>
                {!authTokens || authTokens.isAdmin === false ? <div></div> : 
                <button 
                    onClick={()=>navigate(`/restaurant/${id}/edit`)} 
                    className='ml-auto bg-orange-400 hover:bg-transparent text-white hover:text-orange-400 border border-orange-400 hover: border-transparent rounded p-1'
                    >
                    Edit
                </button>}
                {!authTokens || authTokens.isAdmin === false ? <div></div> : 
                <button 
                    onClick={deleteRestaurant} 
                    className='ml-10 mr-5 bg-orange-400 hover:bg-transparent text-white hover:text-orange-400 border border-orange-400 hover: border-transparent rounded p-1'>
                    Delete
                </button>}
            </div>
            <div className='mt-5 flex max-w-full '>
                <div className="max-w-md content-center justify-items-center overflow-x-auto shadow-md sm:rounded-lg">
                    <img className="rounded-lg w-76 h-76 object-cover" src={businesses.image} alt={businesses.name}/>
                </div>
                <div className="ml-5 max-w-lg border-2 border-orange-400 p-2.5 overflow-x-auto shadow-lg sm:rounded-lg rounded-md">
                    <h2 className="text-2xl font-bold mb-3">{businesses.name}</h2>
                        <Rating business={businesses}/>
                    <p>{businesses.price}
                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-slate-200 uppercase last:mr-0 ml-1 mr-1">
                        {businesses.category}</span>
                    </p>
                    <div className="mt-5">
                        <p>{businesses.description}</p>
                    </div>
                </div>
                <div className="ml-10 w-48 border-2 p-2.5 overflow-x-auto shadow-lg sm:rounded-lg rounded-md bg-gray-600 opacity-75">
                    <p className='text-white text-right'>{businesses.address}</p>
                </div>
            </div>
            <hr className='mt-5'/>
            <div className='mt-5 relative overflow-x-auto shadow-lg sm:rounded-lg'>
                <h2 className="bg-gray-500 text-white text-center uppercase text-lg font-semibold">Reviews</h2>
                <hr/>
                <table className='table-fixed w-full text-sm text-left'>
                    <thead className='text-xs uppercase bg-gray-300'>
                        <tr>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Rating</th>
                            <th scope="col" className="px-6 py-3">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.length > 0 ? loaded(): <tr><td className="px-6 py-3">No Reviews</td></tr>}
                    </tbody>
                </table>
            </div>
            <hr className='mt-5'/>
            <div className='mt-5'>
                <h4>Write a Review</h4>
                {user ? <Reviews reviews={reviews} setReviews={setReviews}/> : <p>Please login to write a review</p>}
            </div>
        </div>
    )
}

export default RestaurantPage;