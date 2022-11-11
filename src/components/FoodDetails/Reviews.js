import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ foodName }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-phi-rosy.vercel.app/review?foodName=${foodName}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [foodName])
    return (
        <div className='container bg-info  py-5 bg-opacity-25'>
            <h1 className='text-center'>Food Reviews</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
                {
                    reviews.map(review => <Review key={review._id} Review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;