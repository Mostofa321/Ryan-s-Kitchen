import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white container-fluid py-3 fixed-top ">
            <div className="container ">
                <div>
                    <a className="navbar-brand fs-1 fw-semibold" href="#">Ryan's Kitchen</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 fs-5" href="#">Fods</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 fs-5" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-info text-bold py-2 px-5">Register</button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;