import React from 'react';

import { Outlet } from 'react-router';
import Navbaer from '../Component/Navber';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Navbaer></Navbaer>
            <Outlet></Outlet>
            <Footer></Footer>
            
         </div>
    );
};

export default Root;