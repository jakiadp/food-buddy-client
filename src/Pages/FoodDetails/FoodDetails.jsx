import React from 'react';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food)
    
    return (
        <div>
            
        </div>
    );
};

export default FoodDetails;