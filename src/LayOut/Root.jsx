import React from 'react';
import Navbaer from '../Router/Component/Navbaer';
import { Outlet } from 'react-router';
import Footer from '../Router/Component/Footer';

const Root = () => {
    return (
        <div>
            <Navbaer></Navbaer>
            <Outlet></Outlet>
            <Footer></Footer>
         </div>
    );
};

export default Root;