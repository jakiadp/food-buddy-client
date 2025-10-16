import React from 'react';
import banarImg from '../assets/image/little-children.jpg'
const Bannar = () => {
    return (
        <div>
           <div
  className="hero min-h-96"
   style={{ backgroundImage: `url(${banarImg})` }}
>



  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Fight hunger with <br /> FoodBuddy</h1>
      <p className="mb-5">
        With just a few clicks, you can donate to someone in need, and the United Nations World Food Programme will deliver the meals. Together, we can make a difference.
      </p>
     <div className='flex gap-5 justify-center'>
         <button className="px-6 p-2 text-xl font-semibold rounded-md text-white bg-orange-400 hover:bg-orange-500 shadow-xl">Our Mission</button>
          <button className="px-6 p-2 text-xl font-semibold px-4 p-2  rounded-md text-white bg-orange-400 hover:bg-orange-500 shadow-xl ">Learn More</button>
     </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Bannar;