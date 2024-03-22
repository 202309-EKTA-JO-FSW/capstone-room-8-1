import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenuItemCard = ({ menuItem }) => {
  return (
    <Link href={`/menu-items/${menuItem._id}`}> 
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
        <Image
          src={menuItem.image} 
          alt={menuItem.dishName}
          width={400}
          height={300}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900">
          {menuItem.dishName}
        </h3>
        {/* Optionally add price: */}
        {menuItem.price && (
          <p className="text-gray-700">Price: {menuItem.price}</p>
        )} 
      </div>
    </Link> 
  );
};

export default MenuItemCard;
