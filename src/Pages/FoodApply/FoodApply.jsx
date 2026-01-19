import React from 'react';
import { useParams } from 'react-router';

const FoodApply = () => {

const params = useParams();
console.log(params);


    return (
        <div>
            <h3 className='text-4xl'>Food Apply</h3>
        </div>
    );
};

export default FoodApply;
