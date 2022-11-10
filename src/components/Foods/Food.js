import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Food = ({ food }) => {
    const { name, price, foodImg, description, _id } = food;
    return (
        <div className="col" >
            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <PhotoProvider>
                    <PhotoView src={foodImg}>
                        <img src={foodImg} className="card-img-top" alt="..." />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Price : ${price}</h5>
                    </div>
                    <p className="card-text">{description.length < 100 ? description : description.slice(0, 99) + '...'}</p>
                    <Link to={`/foods/${_id}`}>
                        <button className='btn btn-outline-secondary' style={{ boxShadow: "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25)" }}>view details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;