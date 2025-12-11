import React, { use } from 'react';

const Hotfood = ({foodsPromise}) => {
    const foods =use(foodsPromise);
    return (
        <div>
            {foods.length}
        </div>
    );
};

export default Hotfood;