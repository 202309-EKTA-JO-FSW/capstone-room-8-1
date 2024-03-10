// app/restaurants/page.js

import React from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsPage = async () => {
    try {
        const res = await fetch('http://192.168.1.3:3001/restaurants');
        const { Restaurant } = await res.json();
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                        Restaurants
                    </h2>
                    <SearchBar />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Restaurant.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant._id}
                                restaurant={restaurant}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        // Handle the error gracefully, e.g., show an error message to the user
        return <div>Error loading restaurants. Please try again later.</div>;
    }
};

export default RestaurantsPage;
