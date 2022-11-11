import React from 'react';

const AboutMe = () => {
    return (
        <div className="card mb-3 container" >
            <div className="row g-0 align-items-center">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/tbzMJ0V/cook.webp" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-6">
                    <div className="card-body col">
                        <h1 className="card-title display-1">About Me</h1>
                        <p className="card-text display-4">Hi, I'm Ryan. I am an efficient cook. I use my skills to make delicious food and sell it by taking orders from online based customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;