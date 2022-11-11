import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddFood = () => {
    const [fieldValue, setFieldValue] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://assignment-11-server-phi-rosy.vercel.app/food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fieldValue)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    return toast("Food Added Successfully!")
                };
            })
            .catch(err => console.log(err));
        e.target.reset();
    };

    // **getting form fields + values and setting to the state** 
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const { ...newFieldValue } = fieldValue;
        newFieldValue[field] = value;
        setFieldValue(newFieldValue);
        console.log(newFieldValue);
    }
    return (
        <div className='pt-5 row container mx-auto'>
            <form onSubmit={handleSubmit} className='mx-auto p-5 form col-12 col-md-5 ' style={{  boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                <h2 className='mb-4'>Add Food</h2>
                <div className="mb-3">
                    <input onBlur={handleBlur} type="text" name='name' className="form-control" placeholder='Food Name' id="exampleInputText" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} type="number" name='price' className="form-control" placeholder='Food Price' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} type="url" name='foodImg' className="form-control" placeholder='enter food image url' id="exampleInputUrl" />
                </div>
                <div className="form-floating">
                    <textarea onBlur={handleBlur} className="form-control" name='description' placeholder="Food description" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Food description</label>
                </div>
                <button type="submit" className="btn btn-primary mt-3 w-100">Add Food</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddFood;