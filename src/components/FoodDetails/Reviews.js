import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({foodName}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?foodName=${foodName}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[foodName])
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
            {
                reviews.map(review => <Review key={review._id} Review={review}/>)
            }
        </div>
    );
};

export default Reviews;