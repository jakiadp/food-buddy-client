import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const FoodCard = ({food}) => {
    const{_id,food_name,food_image,food_status,pickup_location,additional_notes} =food
    return (
        <div className="card bg-base-200 w-88  hover:shadow-2xl  hover:text-black hover:bg-orange-500 shadow-xl">
  <figure>
    <img className='h-80 w-75'
      src={food_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {food_name}
      <div className="badge badge-secondary">{food_status}</div>
      
    </h2>
    <p className='flex  gap-2 items-center'><FaMapMarkerAlt />{pickup_location}</p>
    <p>{additional_notes}</p>
    
  </div>
   <div className="card-actions justify-end">
    <Link to={`/foods/${_id}`}><button className="btn btn-primary">Food Details</button></Link>
    
    </div>
</div>
    );
};

export default FoodCard;