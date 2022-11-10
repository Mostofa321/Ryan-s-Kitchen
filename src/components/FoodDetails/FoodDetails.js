import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    const { name, price, foodImg, description, _id } = food;
    return (
        <div className="card mb-3 container py-5" >
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={foodImg} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h5 className="card-text">Price : ${price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;