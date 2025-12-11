import React, { use } from 'react';

const Hotfood = ({foodPromise}) => {
    const foods =use(foodPromise);
    return (
        <div>
            {foods.lenth}
        </div>
    );
};

export default Hotfood;