import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';


const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut()
            .then(() => {
                console.log('Sign Outed Uccesfully')
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <nav className="navbar navbar-expand-lg bg-white container-fluid py-3 fixed-top ">
            <div className="container ">
                <div>
                    <a className="navbar-brand fs-1 fw-semibold" href="#"> <span><i className="fa-solid fa-utensils"></i></span> Ryan's Kitchen</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to='/' className="nav-link fs-5" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-link mx-3 fs-5" >Blog</Link>
                        </li>
                        {
                            user?.uid &&
                            <>
                                <li className="nav-item">
                                    <Link to='/addFood' className="nav-link mx-3 fs-5" >Add Food</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/blog' className="nav-link mx-3 fs-5" >My reviews</Link>
                                </li>
                            </>



                        }
                    </ul>
                </div>
                <div>
                    {
                        user?.uid ?
                            <button onClick={signOut} className='btn btn-primary'>Logout</button>
                            :
                            <Link to='/login'>
                                <button className="btn btn-primary px-md-4">Login</button>
                            </Link>
                    }
                </div>

            </div>
        </nav>
    );
};

export default Nav;