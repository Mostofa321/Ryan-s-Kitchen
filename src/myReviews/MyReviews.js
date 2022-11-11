import React, { useContext, useEffect, useState } from 'react';
import Review from '../components/FoodDetails/Review';
import { AuthContext } from '../contexts/UserContexts';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const reviwerEmail = user?.email;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-phi-rosy.vercel.app/myReview?reviwerEmail=${reviwerEmail}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviwerEmail]);
    if (reviews.length > 0) {
        return (
            <div className='container bg-info  py-5 bg-opacity-25'>
                <h1 className='text-center'>Food Reviews</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
                    {
                        reviews.map(review => <MyReview key={review._id} Review={review} />)
                    }
                </div>
            </div>
        )
    }
    return (
        <div className='pt-5'>
            <h1 className='mt-5 pt-5 text-center'>No Review Found</h1>
        </div>
    )
};

export default MyReviews;