import React, { use } from 'react';

const Hotfood = ({foodsPromise}) => {
    const foods =use(foodsPromise);
    return (
        <div>
        
        <h1>{foods.length}</h1>
          
      </div>
    );
};

export default Hotfood;