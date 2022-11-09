import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto p-5 form ' style={{ width: "500px", boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
            <form >
                <h2 className='mb-4'>Login</h2>
                <div className="mb-3">
                    <input type="email" name='email' className="form-control" placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="form-control" placeholder='password' id="exampleInputPassword1" />
                </div>
                {/* {
                    successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                } */}
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
            <div className='d-flex align-items-center'>
                <hr className=' me-2' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                <h3 className=''>or</h3>
                <hr className=' ms-2' style={{ border: "1px solid", width: "45%", height: "1px" }} />
            </div>
            <p className='mt-5'><small className='me-3'>dont have an account yet?</small><Link to='/'>Sign Up</Link></p>
        </div>
    );
};

export default Login;


