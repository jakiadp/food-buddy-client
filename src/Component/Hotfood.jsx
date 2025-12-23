import React, { useEffect, useState } from 'react';

const Hotfood = ({ foodsPromise }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodsPromise.then(data => {
      setFoods(data);
    });
  }, [foodsPromise]);

  return (
    <div>
      <h1>Food {foods.length}</h1>
    </div>
  );
};

export default Hotfood;