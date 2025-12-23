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
      <h2 className='text-4xl font-semibold'>Available Food of the Day </h2>
     <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
      {
        foods.map(food => <FoodCard key={food._id}
                                    food={food}></FoodCard>)
      }
     </div>
    </div>
  );
};

export default Hotfood;