// http://192.168.1.3:3001/restaurants

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await fetch('http://localhost:3001/restaurants');
            const data = await response.json();
            setRestaurants(data.Restaurant);
        };

        fetchRestaurants();
    }, []);

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Restaurants
                </h2>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant._id}
                            href={`/menu/${restaurant._id}`}
                        >
                            <RestaurantCard restaurant={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantsPage;
