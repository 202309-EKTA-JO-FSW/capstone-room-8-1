import { cookies } from 'next/headers';
import Dashboard from './Dashboard';
// import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

async function fetchRestaurants() {
    'use server';

    const result = await fetch('http://192.168.192.1:3001/restaurants');
    const data = await result.json();
    return data;
}

async function fetchItems(restaurantID) {
    'use server';

    const result = await fetch(
        `http://192.168.192.1:3001/restaurants/${restaurantID}/dishes`
    );
    const data = await result.json();
    return data.Dishes;
}

async function deleteRestaurant(restaurantID) {
    'use server';

    const result = await fetch(
        `http://192.168.192.1:3001/admin/restaurant/${restaurantID}`,
        {
            method: 'DELETE',
            headers: {
                Cookie: cookies().toString(),
            },
        }
    );

    if (result.ok) return true;
}

async function deleteItem(itemId) {
    'use server';

    const result = await fetch(`http://192.168.192.1:3001/admin/dish/${itemId}`, {
        method: 'DELETE',
        headers: {
            Cookie: cookies().toString(),
        },
    });

    if (result.ok) return true;
}

async function updateRestaurant(updateFields, restaurantID) {
    'use server';

    const result = await fetch(
        `http://192.168.192.1:3001/admin/restaurant/${restaurantID}`,
        {
            method: 'PUT',
            headers: {
                Cookie: cookies().toString(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateFields),
        }
    );
    const data = await result.json();

    if (result.ok) return data;
}

async function updateItem(updateFields, itemId) {
    'use server';

    const result = await fetch(`http://192.168.192.1:3001/admin/dish/${itemId}`, {
        method: 'PUT',
        headers: {
            Cookie: cookies().toString(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateFields),
    });
    const data = await result.json();
    if (result.ok) return data.dish;
}

async function createRestaurant(fields) {
    'use server';

    const result = await fetch(`http://192.168.192.1:3001/admin/restaurant`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString(),
        },
        body: JSON.stringify(fields),
    });
    const data = await result.json();
    console.log(data);

    if (result.ok) return data;
}

async function createItem(fields) {
    'use server';

    const result = await fetch(`http://192.168.192.1:3001/admin/dish`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString(),
        },
        body: JSON.stringify(fields),
    });
    const data = await result.json();
    if (result.ok) return data.dish;
}

const AdminDashboard = () => {
    return (
        <main className="">
            <Dashboard
                fetchRestaurants={fetchRestaurants}
                fetchItems={fetchItems}
                deleteRestaurant={deleteRestaurant}
                deleteItem={deleteItem}
                updateRestaurant={updateRestaurant}
                updateItem={updateItem}
                createRestaurant={createRestaurant}
                createItem={createItem}
            />
        </main>
    );
};

export default AdminDashboard;
