import React from 'react';
import bannerImg from '../../images/banner1.jpg'

const Home = () => {
    return (
        <>
            <div className='banner'>
                {/* <img src={bannerImg} className='w-100' style={{height: "547px"}} /> */}
                <div className='mx-auto pt-5 row'>
                    <h1 className='text-white fw-bold text-center col-12 col-md-7 mx-auto mt-5 pt-5'>Welcom To Ryan's Kitchen</h1>
                    <p className='text-white  text-center col-12 col-md-7 mx-auto fs-5'>this is the paragraph this is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis isthe paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraph</p>
                </div>
            </div>
        </>
    );
};

export default Home;