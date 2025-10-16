import React from 'react';
import Bannar from '../Component/Bannar';
import ExploreSection from '../Component/ExploreSection';
import FaSection from '../Component/FaSection';
import TakeSection from '../Component/TakeSection';


const Home = () => {
    return (
        <div className='space-y-20'>
            <Bannar></Bannar>
            <TakeSection></TakeSection>
            <FaSection></FaSection>
            <ExploreSection></ExploreSection>
            
        </div>
    );
};

export default Home;