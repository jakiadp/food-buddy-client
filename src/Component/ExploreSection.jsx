import React from 'react';
import image from '../assets/image/2childern.jpg'

const ExploreSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <section className=" bg-gray-100  text-gray-800 my-20 rounded-xl" >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
				<span className=" text-orange-400">FoodBuddy</span> 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Food Buddy Is a Most Charity/ Non-profit/ Fundraising/ NGO organizations.
                 <br /> Now Be aHand Is a Biggest organizations In This Globe.</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  bg-orange-400  text-gray-50">Read More</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-800">Join</a>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default ExploreSection;