'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import MenuItemCard from '../components/MenuItems'; // Renamed

const MenuItemsPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await fetch(
                'http://localhost:3001/restaurants/65e50714fdea5d1f987b9b98/dishes'
            );
            const data = await response.json();
            console.log(data);
            setMenuItems(data.Dishes); // Assuming a 'MenuItems' array in response
        };

        fetchMenuItems();
    }, []);

    const filteredMenuItems = menuItems.filter((menuItem) => {
        console.log(searchTerm);
        if (searchTerm !== '') {
            return menuItem.dishName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()); 
        }else{
            return menuItem;
        }
        // Might need adjusting
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Menu
                </h2>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMenuItems.map((menuItem) => (
                        <Link
                            key={menuItem._id} // Assuming menu items have '_id'
                            href={`/menu-items/${menuItem._id}`}
                        >
                            <MenuItemCard menuItem={menuItem} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuItemsPage;
