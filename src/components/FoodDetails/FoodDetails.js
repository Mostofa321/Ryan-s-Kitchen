import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';
import Reviews from './Reviews';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const { name, price, foodImg, description, _id } = food;

    // Send Review To Server 
    const [fieldValue, setFieldValue] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://assignment-11-server-phi-rosy.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fieldValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    return toast("Review Added Successfully!")
                };
            })
            .catch(err => console.log(err));
        e.target.reset();
    };

    // **getting form fields + values and setting to the state** 
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const foodId = _id;
        const { ...newFieldValue } = fieldValue;
        newFieldValue[field] = value;
        newFieldValue.foodId = foodId;
        newFieldValue.foodName = name;
        newFieldValue.reviwerEmail = user?.email;
        setFieldValue(newFieldValue);
        console.log(newFieldValue);
    }
    return (
        <>
            <div className="card  container py-5 " >
                <div className="row g-0 align-items-center ">
                    <div className="col-md-4 col-12">
                        <img src={foodImg} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <h5 className="card-text">Price : ${price}</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviews section  */}
            <div>
                {
                    <Reviews foodName={name} />
                }
            </div>
            {/* Add Review Section  */}
            <div className='py-5 row container mx-auto'>
                {
                    user?.email ?
                        <form onSubmit={handleSubmit} className='mx-auto p-5 form col-12 col-md-5' style={{ width: "500px", boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                            <h2 className='mb-4'>Add A Review</h2>
                            <div className="mb-3">
                                <input onBlur={handleBlur} type="text" name='reviewerName' className="form-control" placeholder='Enter Your Name' id="exampleInputText" aria-describedby="textHelp" />
                            </div>
                            <div className="mb-3">
                                <input onBlur={handleBlur} type="url" name='reviewerPhoto' className="form-control" placeholder='enter your photo url' id="exampleInputUrl" />
                            </div>
                            <div className="form-floating">
                                <textarea onBlur={handleBlur} className="form-control" name='review' placeholder="Food description" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Review</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 w-100">Add Review</button>
                        </form>
                        :
                        <Link to='/login'>
                            <h3>Please login to add a review!!!</h3>
                        </Link>
                }

            </div>
            <ToastContainer />
        </>
    );
};

export default FoodDetails;