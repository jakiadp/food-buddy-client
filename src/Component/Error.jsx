import React from 'react';
import image from '../assets/image/ErrorImg.jpg';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='text-center '>
            <img src={image} alt=""  className='mt-20 mb-5 h-150 mx-auto'/>
            <Link to='/' className='btn px-6 p-2 text-xl mb-20  rounded-md text-white bg-orange-400 hover:bg-orange-500 ' >Back to Home</Link>
        </div>
    );
};

export default Error;