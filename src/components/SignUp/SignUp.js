import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form  className='mx-auto p-5 form' style={{ width: "500px", boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                <h2 className='mb-4'>Sign Up</h2>
                <div className="mb-3">
                    <input type="text" name='name' className="form-control" placeholder='Full name' id="exampleInputText" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <input type="email" name='email' className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="form-control" placeholder='Password' id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input type="url" name='userPhoto' className="form-control" placeholder='enter your photo url' id="exampleInputUrl" />
                </div>

                {/* {
                    successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                } */}

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <p className='mt-5'><small className='me-3'>Already have an account?</small><Link to='/login'>Sign In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;