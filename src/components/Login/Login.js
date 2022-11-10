import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let { login, googleLogin } = useContext(AuthContext);
    const [errMessage, setErrMessage] = useState(null)
    const [successMessage, setSuccesMeassage] = useState(null)
    // logit with email and password 
    const loginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        if (!email || !password) {
            return
        };
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccesMeassage('user logined successfully');
                form.reset();
                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch(err => {
                const errorMessage = err.message;
                setErrMessage(errorMessage);
            });

    };
    // login with google 
    const loginGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='pt-md-5 container row mx-auto'>
            <div className='mx-auto p-5 form col-12 col-md-5' style={{boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                <form onSubmit={loginUser}>
                    <h2 className='mb-4'>Login</h2>
                    <div className="mb-3">
                        <input type="email" name='email' className="form-control" placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" placeholder='password' id="exampleInputPassword1" />
                    </div>
                    {
                        successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                    }
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>
                </form>
                <div className='d-flex align-items-center'>
                    <hr className=' me-2' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                    <h3 className=''>or</h3>
                    <hr className=' ms-2' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                </div>
                <button onClick={loginGoogle} type="submit" className="btn btn-secondary w-100">Sign In With Google <i className="fa-brands fa-google ms-2 fs-4"></i></button>
                <p className='mt-5'><small className='me-3'>dont have an account yet?</small><Link to='/signUp'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;


