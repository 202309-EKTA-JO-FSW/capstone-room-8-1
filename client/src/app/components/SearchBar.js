import React from 'react';

const SearchBar = () => {
    return (
        <div className="mb-8 text-black">
            <input
                type="text"
                placeholder="Search restaurants..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;
