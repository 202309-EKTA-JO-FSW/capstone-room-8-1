import React from 'react';
import MainPage from './MainPage';
import { cookies } from 'next/headers';

async function getRestaurantData(id) {
    'use server';

    const resDishes = await fetch(
        `http://192.168.1.4:3001/restaurants/${id}/dishes`
    );
    const { Dishes } = await resDishes.json();

    const resReviews = await fetch(`http://192.168.1.4:3001/reviews/${id}`);
    const { reviews } = await resReviews.json();

    const resRestaurant = await fetch(
        `http://192.168.1.4:3001/admin/restaurant/${id}`,
        { method: 'GET', headers: { Cookie: cookies().toString() } }
    );
    const { restaurant } = await resRestaurant.json();
    console.log(reviews);
    return { Dishes, reviews, restaurant };
}

const singleRestaurantPage = () => {
    return <MainPage getRestaurantData={getRestaurantData} />;
};

export default singleRestaurantPage;
