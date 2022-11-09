import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
    const foods = useLoaderData()
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5'>
            {
                foods.map(food => <Food key={food._id} food={food} />)
            }
        </div>
    );
};

export default Foods;