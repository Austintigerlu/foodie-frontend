import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function Reviews(props){
    let {user, authTokens} = useContext(AuthContext)
    const [reviews, setReviews] = useState()
    const [rating, setRating] = useState()
    const [comment, setComment] = useState()
    const {id} = useParams();
    const URL = process.env.REACT_APP_YELP_API+"restaurants/"
    
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
                setReviews(response.data)
            })
            .catch(function(error){
                setReviews(error)
            })
    }

    return(
        <div>
            <form onSubmit={createReview}>
                <label>Rating</label>
                <input type="number"onChange={(e)=> setRating(e.target.value)}/>
                <label>Comment</label>
                <input type='text' onChange={(e)=> setComment(e.target.value)}/>
                <input className='btn' type='submit'/>
            </form>
        </div>
    )
}

export default Reviews;