import React, {useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function Reviews(props){
    let {user, authTokens} = useContext(AuthContext)

    const [rating, setRating] = useState()
    const [comment, setComment] = useState()
    const {id} = useParams();
    const URL = process.env.REACT_APP_YELP_API+"restaurants/"
    
    const refreshPage = () =>{
        window.location.reload();
    }
    
    let createReview = async(e) => {
        e.preventDefault()
        const context ={
            method: 'POST',
            url: URL+id+'/reviews',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`,
            },
            data: {
                rating: rating,
                comment: comment,
                user: user.user_id,
                restaurant: id
            }
        }

        axios.request(context)
            .then(function(response){
                props.setReviews(response.data)
                console.log(response)
                refreshPage()
            })
            .catch(function(error){
                props.setReviews(error)
            })
    }

    

    return(
        <div>
            <form onSubmit={createReview}>
            <div className="mb-4 w-full overflow-x-auto shadow-lg bg-gray-200 rounded-b-lg">
                <div className="py-2 px-4  bg-gray-50">
                    <label htmlFor="comment" className="sr-only">Your comment</label>
                    <textarea onChange={(e)=> setComment(e.target.value)} id="comment" rows="4" className="px-0 w-full text-sm bg-gray-50 border-0 focus:ring-0" placeholder="Write a comment..." required></textarea>
                </div>
                <div className="flex justify-between items-center py-2 px-3 border rounded-b-lg">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-cyan-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-cyan-600">
                        Post Review
                    </button>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                        <select type="number" onChange={(e)=> setRating(e.target.value)}>
                            <option defaultValue='0'>Rating out of 5</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
                
            </form>
        </div>
    )
}

export default Reviews;