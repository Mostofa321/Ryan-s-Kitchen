import React from 'react';

const Contact = () => {
    return (
        <div className="card mb-3 container my-3 border-0 bg-info" >
            <div className="row g-0 flex-row-reverse align-items-center">
                <div className="col-md-6">
                    <form className='mx-auto p-5 form col-12' >
                        <div className="mb-3">
                            <input type="text" name='name' className="form-control" placeholder='Enter Your Name' id="exampleInputText" aria-describedby="textHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="email" name='email' className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" name='description' placeholder="Food description" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Message</label>
                        </div>
                        <button type="submit" className="btn btn-outline-dark mt-3 w-100">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="card-body text-center">
                        <p className="card-text">Phone: +8801882580190</p>
                        <p className="card-text">Email: hmshumon123@gmail.com</p>
                        <p className="card-text">Address: Level-2, 28, Ahsan Bag, Kamrangirchar, Dhaka-1211</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;