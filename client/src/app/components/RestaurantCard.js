import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div href={`/restaurants/${restaurant._id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <Image
                    // src={restaurant.logoImage}
                    alt={restaurant.name}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                    {restaurant.name}
                </h3>
            </div>
        </div>
    );
};

export default RestaurantCard;
