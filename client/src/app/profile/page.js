import { cookies } from 'next/headers';
import InfoTable from './InfoTable';
import PastOrders from './PastOrders';

async function updateProfile(updatedUser) {
    'use server';
    try {
        const token = cookies().get('jwt');
        const response = await fetch(
            'http://192.168.1.3:3001/customer/profile',
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `jwt=${token.value}`,
                },
                body: JSON.stringify(updatedUser),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

        const data = await response.json();
        // Handle the response data as needed
        console.log('Profile updated successfully:', data);
    } catch (error) {
        console.error('Error updating profile:', error);
        // Handle the error appropriately (e.g., show an error message to the user)
    }
}

const postReviewOrder = async (review, selectedOrder) => {
    'use server';
    const token = cookies().get('jwt');
    const response = await fetch(
        `http://192.168.1.3:3001/customer/orders/${selectedOrder._id}/review`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `jwt=${token.value}`,
            },
            body: JSON.stringify({ review }),
        }
    );
    const result = await response.json();
    if (response.ok) return true;
    else return result.message;
};

const fetchUserData = async () => {
    try {
        const token = cookies().get('jwt');
        const response = await fetch(
            'http://192.168.1.3:3001/customer/profile',
            {
                headers: {
                    Cookie: `jwt=${token.value}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.user;
        } else {
            const errorData = await response.json();
            return errorData.message;
        }
    } catch (error) {
        console.log('Error:', error);
    }
};

const fetchOrders = async () => {
    try {
        const token = cookies().get('jwt');
        const response = await fetch(
            'http://192.168.1.3:3001/customer/orders',
            {
                headers: {
                    Cookie: `jwt=${token.value}`,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.orders;
        } else {
            const errorData = await response.json();
            return errorData.message;
        }
    } catch (error) {
        console.log('Error:', error);
    }
};

const ProfileInfo = async () => {
    const user = await fetchUserData();
    const orders = await fetchOrders();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <InfoTable userProps={user} onUpdateProfile={updateProfile} />
                <PastOrders
                    ordersProps={orders}
                    postReviewOrder={postReviewOrder}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
