'use client';

import React, { createContext, useEffect, useState } from 'react';
import ViewRestaurants from './ViewRestaurants';
import ViewItems from './ViewItems';
import AddRestaurant from './AddRestaurant';
import AddItem from './AddItem';
// import { useRouter } from 'next/navigation';
// import { UserContext } from '@/app/utils/contextProvider';

export const RestaurantsContext = createContext(null);

export default function Dashboard({
    fetchRestaurants,
    fetchItems,
    deleteRestaurant,
    deleteItem,
    updateRestaurant,
    updateItem,
    createRestaurant,
    createItem,
}) {
    const [tab, setTab] = useState('Restaurants');
    const [createOpen, setCreateOpen] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    // const { user } = useContext(UserContext);
    // const router = useRouter();

    async function setRestaurantsState() {
        const data = await fetchRestaurants();
        setRestaurants(data.Restaurant);
    }

    useEffect(() => {
        setRestaurantsState();
    }, []);

    // if (!user || !user?.isAdmin) return router.push("/");

    return (
        <RestaurantsContext.Provider
            value={{
                fetchRestaurants,
                fetchItems,
                restaurants,
                setTab,
                items,
                setItems,
                deleteRestaurant,
                setRestaurants,
                deleteItem,
                updateRestaurant,
                updateItem,
                createRestaurant,
                createItem,
                setCreateOpen,
                selectedRestaurant,
                setSelectedRestaurant,
            }}
        >
            <header className="flex items-center justify-around gap-7 py-4 px-4 border-b border-gray-400">
                <div className="flex gap-7 w-1/2 items-center">
                    <h1
                        onClick={() => setTab('Restaurants')}
                        className={`w-1/2 cursor-pointer rounded-lg py-2 text-center text-2xl font-bold tracking-tight text-slate-900 hover:bg-blue-500 sm:text-3xl ${
                            tab === 'Restaurants'
                                ? 'bg-blue-300'
                                : 'bg-blue-200'
                        }`}
                    >
                        Restaurants
                    </h1>
                    <h1
                        onClick={() => setTab('Items')}
                        className={`w-1/2 cursor-pointer rounded-lg py-2 text-center text-2xl font-bold tracking-tight text-slate-900 hover:bg-blue-500 sm:text-3xl ${
                            tab === 'Items' ? 'bg-blue-300' : 'bg-blue-200'
                        }`}
                    >
                        Items
                    </h1>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => setCreateOpen(!createOpen)}
                        className="rounded-lg bg-green-500 text-white px-4 py-2 font-bold hover:bg-green-700"
                    >
                        Create New {tab.slice(0, -1)}
                    </button>
                </div>
            </header>
            {tab === 'Restaurants' && createOpen && (
                <AddRestaurant setCreateOpen={setCreateOpen} />
            )}
            {tab === 'Items' && createOpen && (
                <AddItem setCreateOpen={setCreateOpen} />
            )}

            {tab === 'Restaurants' && <ViewRestaurants />}

            {tab === 'Items' && <ViewItems />}
        </RestaurantsContext.Provider>
    );
}
