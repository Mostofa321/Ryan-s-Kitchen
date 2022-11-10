import React from 'react';

const Review = ({ Review }) => {
    const {foodName, review, reviewerName, reviewerPhoto, reviwerEmail, _id, foodId } = Review;
    return (
        <div className="col" >
            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <img src={reviewerPhoto} className="card-img-top mt-5 w-25 h-25 rounded-circle mx-auto" alt="..." />
                <h3 className='text-center'>{reviewerName}</h3>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h6 className="card-title">Review For: {foodName}</h6>
                    </div>
                    <p className="card-text"><i className="fa-solid fa-quote-left"></i> {review} <i className="fa-solid fa-quote-right"></i></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;