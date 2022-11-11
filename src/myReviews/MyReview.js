import React, { useState } from 'react';

const MyReview = ({ Review, delet }) => {
 
    // console.log(Review);
    const { foodName, review, reviewerName, reviewerPhoto, reviwerEmail, _id, foodId } = Review;
    return (
        <div className="col mx-auto" >
            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <img src={reviewerPhoto} className="card-img-top mt-5 w-25 h-25 rounded-circle mx-auto" alt="..." />
                <h3 className='text-center'>{reviewerName}</h3>
                <div className="card-body">
                    <h5 className='card-title'>review for: {foodName}</h5>
                    <p className="card-text"><i className="fa-solid fa-quote-left"></i> {review} <i className="fa-solid fa-quote-right"></i></p>
                    <div className='d-flex'>
                        <button className='btn btn-outline-secondary d-block'>edit review</button>
                        <button onClick={() => delet(_id)} className='btn btn-outline-secondary ms-auto d-block'>delete review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;