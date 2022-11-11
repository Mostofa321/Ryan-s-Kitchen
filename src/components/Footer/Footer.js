import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark py-5 w-100">
                <div className="text-center py-5">
                  <h1 className="text-white"><span><i className="fa-solid fa-utensils"></i></span> Ryan's Kitchen</h1>
                  <p className="text-light">Address: Level-2, 28, Ahsan Bag, Kamrangirchar,<br/> Dhaka-1211</p>
                  <p><small className="text-white-50">Privacy Ploicy | Terms of use</small></p>
                  
                  <i className="fa-brands fa-facebook-f text-white me-4"></i>
                  <i className="fa-brands fa-twitter text-white me-4"></i>
                  <i className="fa-brands fa-linkedin-in text-white me-4"></i>
                  <i className="fa-brands fa-tiktok text-white"></i>
                </div>
            </footer>
        </div>
    );
};

export default Footer;