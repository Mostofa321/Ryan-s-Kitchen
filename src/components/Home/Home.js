import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Food from '../Foods/Food';


const Home = () => {
    const foods = useLoaderData();
    console.log('my foods is : ', foods)
    return (
        <>
            <div className='banner'>
                <div className='mx-auto pt-5 row'>
                    <h1 className='text-white fw-bold text-center col-12 col-md-7 mx-auto mt-5 pt-5'>Welcom To Ryan's Kitchen</h1>
                    <p className='text-white  text-center col-12 col-md-7 mx-auto fs-5'>this is the paragraph this is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis isthe paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraphthis is the paragraph</p>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
                {
                    foods.map(food => <Food key={food._id} food={food} />)
                }
            </div>
            <Link to='/foods' className='text-decoration-none'>
                <button className='btn btn-secondary fs-5 px-5 mx-auto mb-5 d-block' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>see all</button>
            </Link>
        </>
    );
};

export default Home;