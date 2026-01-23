import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const FoodApply = () => {

const {id: jobId} = useParams();
const {user} = useAuth();

console.log(jobId,user);


    return (
        <div>
            <h3 className='text-4xl'>Food Apply</h3>
            <h2>         food  buddy is comming soon </h2>
            h2
            <h2>ami achi onek dure</h2>
        </div>
    );
};

export default FoodApply;
