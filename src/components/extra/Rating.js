import StarRatings from "react-star-ratings";
import useState from "react"

function Rating(props){
    // const [rating, setRating] = useState(1)
    // setRating(1)
    return(
        <div className="flex items-end mb-1">
            <StarRatings
                rating={1}
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
                starDimension="25px"
                starSpacing="1px"
            />
            <p className="ml-2"># Reviews</p>
        </div>
    )
}

export default Rating;