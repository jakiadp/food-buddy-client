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
            <h2>ami achi onek dure
                tumi koi sadi
                ajke no kaj ajke vote
                pabo ki pabo nah tomake to jani nah.
                tobu tomar preame ami porechi beche theke jeno morechi
            </h2>
            ami koi jabo bani
            ki kori bollo nah

            ami kormu
            <h1>tumi koi tum,i nai ami tomake cai</h1>
        </div>
    );
};

export default FoodApply;
