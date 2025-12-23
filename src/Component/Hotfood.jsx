import React, { useEffect, useState } from 'react';
import FoodCard from './Share/FoodCard';

const Hotfood = ({ foodsPromise }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodsPromise.then(data => {
      setFoods(data);
    });
  }, [foodsPromise]);

  return (
    <div>
      <h2 className='text-4xl font-semibold mb-20'>Available Foods of the Day </h2>
     <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {
        foods.map(food => <FoodCard key={food._id}
                                    food={food}></FoodCard>)
      }
     </div>
    </div>
  );
};

export default Hotfood;