import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../contact/Contact';
import Food from '../Foods/Food';


const Home = () => {
    const foods = useLoaderData();
    console.log('my foods is : ', foods)
    return (
        <>
            <div className='banner container'>
                <div className='mx-auto pt-5 row align-items-center'>
                    <h1 className='text-white  display-2 text-center col-12  mx-auto mt-5 '>Welcom To Ryan's Kitchen</h1>
                    <p className='text-white  text-center col-12 col-md-7 mx-auto fs-5'>Ryan's Kitchen prepares food for you with complete care. And always check the quality and provide food to you. Eat well and stay healthy</p>
                </div>
                <Link to='/foods' className='text-decoration-none'>
                    <button className='btn btn-secondary mx-auto d-block px-5 fs-5'>visit foods</button>
                </Link>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
                {
                    foods.map(food => <Food key={food._id} food={food} />)
                }
            </div>
            <Link to='/foods' className='text-decoration-none'>
                <button className='btn btn-secondary fs-5 px-5 mx-auto mb-5 d-block' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>see all</button>
            </Link>
            <div className='py-5'>
                <AboutMe />
            </div>
            <div className='mb-5'>
                <h1 className='text-center'>GET IN TOUCH</h1>
                <Contact />
            </div>
        </>
    );
};

export default Home;