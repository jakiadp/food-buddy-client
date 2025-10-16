import React from 'react';
import image from '../../assets/image/banar1.jpg'
import children from '../../assets/image/little-children.jpg'
const Banar = () => {
    return (
        <div
  class="hero min-h-screen"
    style={{ backgroundImage: `url(${image})` }}
>
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content flex justify-bewtent">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Fight hunger with <br />
                      FoodBuddy
                      </h1>

      <p class="mb-5">
        With just a few clicks, you can donate to someone in need, and the United Nations World Food Programme will deliver the meals. Together, we can make a difference.

      </p>
      <button class="btn btn-primary">Donate</button>
    </div>
    <div>
        <img src={children} alt="children image" />
    </div>
  </div>
</div>
    );
};

export default Banar;