'use client';
import { useEffect, useState } from 'react';

export default function PastOrders({ ordersProps, postReviewOrder }) {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [review, setReview] = useState('');

    useEffect(() => {
        if (Array.isArray(ordersProps)) return setOrders(ordersProps);
    }, []);

    const handleReviewOrder = (order) => {
        setSelectedOrder(order);
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await postReviewOrder(review, selectedOrder);
            if (result === true) {
                alert('Review submitted successfully');
                setSelectedOrder(null);
                setReview('');
            } else {
                alert(result);
                setSelectedOrder(null);
                setReview('');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-12 mb-8">
                Past Orders
            </h2>
            {orders &&
                orders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-white shadow overflow-hidden sm:rounded-lg mb-6"
                    >
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Order ID: {order._id}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Order Time: {order.orderTime}
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Total Bill
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {order.totalBill}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                onClick={() => handleReviewOrder(order)}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Review Order
                            </button>
                        </div>
                    </div>
                ))}
            {selectedOrder && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Review Order
                                    </h3>
                                    <button
                                        type="button"
                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setSelectedOrder(null)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <form onSubmit={handleReviewSubmit}>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="review"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Review
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="review"
                                                name="review"
                                                rows="3"
                                                className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                                placeholder="Write your review here..."
                                                value={review}
                                                onChange={(e) =>
                                                    setReview(e.target.value)
                                                }
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            Submit Review
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
