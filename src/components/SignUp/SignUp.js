import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/UserContexts';

const SignUp = () => {
    const navigate = useNavigate()
    const { signUp } = useContext(AuthContext);
    const [errMessage, setErrMessage] = useState(null)
    const [successMessage, setSuccesMeassage] = useState(null)
    const createUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const userPhoto = form.userPhoto.value;
        if (!name || !email || !password || !userPhoto) {
            return
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                setSuccesMeassage('user created succesfuly');
                updateUserProfile(name, userPhoto)
                form.reset();
                navigate('/')
            })
            .catch(err => {
                const errorMessage = err.message;
                setErrMessage(errorMessage);
            });

    }
    const updateUserProfile = (name, userPhoto, user) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: userPhoto
        })
            .then(() => {
                console.log("updated")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='pt-5'>
            <form onSubmit={createUser} className='mx-auto p-5 form' style={{ width: "500px", boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
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

                {
                    successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                }

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <p className='mt-5'><small className='me-3'>Already have an account?</small><Link to='/login'>Sign In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;