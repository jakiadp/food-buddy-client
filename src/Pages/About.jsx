import React from 'react';
import image from '../assets/image/diverse-people-refugee-camps.jpg'
const About = () => {
    return (
          <div className=''>
            <h1 className='text-5xl text-black font-bold mb-2'>Take Action</h1>
			<p>Your generous donation helps us continue our mission to make a positive impact in the community. Every contribution, big or small, <br />
			 supports important projects and initiatives that improve lives, provide essential resources, and bring hope to those in need.

             <br />  Thank you for your kindness and support!</p>
    
                  <section className=" bg-gray-100  text-gray-800 my-10 rounded-xl" >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-2xl font-bold leading-none sm:text-3xl">
                    Give emergency aid in Palestine
                    
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Shared meals will provide emergency food assistance to families in Palestine.</p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-800">Read More</a>
                       <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  bg-orange-400  text-gray-50">Donate</a>
              </div>
            </div>
        </div>
       </section>
               </div>
    );
};

export default About;