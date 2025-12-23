import React from 'react';

const FoodCard = ({food}) => {
    const{food_name,food_image,food_status,pickup_location,additional_notes} =food
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img className=''
      src={food_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {food_name}
      <div className="badge badge-secondary">{food_status}</div>
      
    </h2>
    <p>{pickup_location}</p>
    <p>{additional_notes}</p>
    
  </div>
</div>
    );
};

export default FoodCard;