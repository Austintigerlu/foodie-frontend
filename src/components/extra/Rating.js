import StarRatings from "react-star-ratings";


function Rating(props){

    return(
        <div className="flex items-end mb-1 ">
            <StarRatings
                rating={props.business.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
                starDimension="25px"
                starSpacing="1px"
            />
            <p className="ml-3">{props.business.rating} out of 5</p>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-orange-300 uppercase last:mr-0 ml-3 mr-1">
                <p className="">{props.business.numReviews} {props.business.numReviews === 1 ? 'Review': 'Reviews'}</p>
            </span>
        </div>
    )
}

export default Rating;