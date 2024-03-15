'use client';
import { useEffect, useState } from 'react';

export default function InfoTable({ userProps, onUpdateProfile }) {
    const [user, setUser] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(null);

    useEffect(() => {
        if (userProps) {
            setUser(userProps);
            setUpdatedUser(userProps);
        }
    }, [userProps]);

    const handleUpdateProfile = () => {
        setIsEditMode(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onUpdateProfile(updatedUser);
        alert('Profile updated successfully');
        setIsEditMode(false);
        setUser(updatedUser);
    };

    return (
        <>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                Profile Information
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personal Information
                    </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={updatedUser?.username || ''}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                ) : (
                                    user?.username
                                )}
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {isEditMode ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={updatedUser?.email || ''}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                ) : (
                                    user?.email
                                )}
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={updatedUser?.address || ''}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                ) : (
                                    user?.address
                                )}
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {isEditMode ? (
                                    <input
                                        type="number"
                                        name="phone"
                                        value={updatedUser?.phone || ''}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                ) : (
                                    user?.phone
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    {isEditMode ? (
                        <button
                            onClick={handleSubmit}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Changes
                        </button>
                    ) : (
                        <button
                            onClick={handleUpdateProfile}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Profile
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
