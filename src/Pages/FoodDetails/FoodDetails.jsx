import React from "react";
import { Link, useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();

  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expired_datetime,
    additional_notes,
    food_status,
    donor
  } = food;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl text-center font-bold mb-8">
        Food Details
      </h1>

      {/* Food Info */}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-150 object-cover"
          />
        </figure>

        <div className="card-body space-y-2">
          <h2 className="card-title text-3xl text-center">{food_name}</h2>

          <p><strong>Quantity:</strong> {food_quantity}</p>
          <p><strong>Status:</strong> {food_status}</p>
          <p><strong>Pickup Location:</strong> {pickup_location}</p>

          <p>
            <strong>Expire Date:</strong>{" "}
            {new Date(expired_datetime).toLocaleString()}
          </p>

          <p><strong>Additional Notes:</strong> {additional_notes}</p>

          <hr />

          {/* Donor Info */}
          <h3 className="text-2xl font-semibold">Donor Information</h3>

          <div className="flex items-center gap-4">
            <img
              src={donor?.donor_image}
              alt={donor?.donor_name}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <p><strong>Name:</strong> {donor?.donor_name}</p>
              <p><strong>Email:</strong> {donor?.donor_email}</p>
            </div>
          </div>
         <Link> <button className="w-full btn btn-pramary">Request Button</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;