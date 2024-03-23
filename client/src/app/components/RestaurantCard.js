import React from 'react';
import Link from 'next/link';
const RestaurantCard = ({ restaurant }) => {
    return (
        <div href={`/restaurants/${restaurant._id}`}>
        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-hoverColor transform hover:scale-105 transition duration-300 ease-in-out">
            <img
                src={restaurant.logoImage}
                alt={restaurant.name}
                className="w-full h-40 object-cover rounded-md mb-4"
                style={{ width: 400, height: 300 }} // Specify width and height here if needed
            />
            <h3 className="text-xl font-semibold text-gray-900 hover:text-white">
                {restaurant.name}
            </h3>
            <h6 className="text-s font-semibold text-gray-900 hover:text-white">
                {restaurant.address.city}, {restaurant.address.street}
            </h6>
        </div>
    </div>
    
    );
};

export default RestaurantCard;
