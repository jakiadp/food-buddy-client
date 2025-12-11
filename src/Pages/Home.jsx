import React from 'react';
import Bannar from '../Component/Bannar';
import ExploreSection from '../Component/ExploreSection';
import FaSection from '../Component/FaSection';
import TakeSection from '../Component/TakeSection';

import Hotfood from '../Component/Hotfood';



const Home = () => {

const foodsPromise = fetch('http://localhost:3000/foods').then(res => res.json());

    return (
        <div className='space-y-20'>
            <Bannar></Bannar>
            <Hotfood foodsPromise={foodsPromise}></Hotfood>
            
            <TakeSection></TakeSection>
            <FaSection></FaSection>
            <ExploreSection></ExploreSection>
            
        </div>
    );
};

export default Home;