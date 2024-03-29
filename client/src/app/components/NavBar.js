/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Jwt from 'jsonwebtoken';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            const token = Cookies.get('jwt');
            if (token) {
                const decodedToken = Jwt.decode(token);
                const { _id, type } = decodedToken;
                setUser({ id: _id, type: type });
            }
        }
    }, [user]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        Cookies.remove('jwt');
        setUser(null);
        router.push('/');
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <img
                                src="https://i.ibb.co/MkB2C1Y/Whats-App-Image-2024-03-23-at-15-34-04-7446be83-copy.png"
                                alt="Orderio Logo"
                                className="h-16"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-grow items-center justify-center">
                        <div className="ml-4 flex items-baseline space-x-4 *:text-base">
                            <Link href="/restaurants">
                                <span className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md font-medium">
                                    Restaurants
                                </span>
                            </Link>
                            <Link href="/about">
                                <span className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md font-medium">
                                    About
                                </span>
                            </Link>
                            <Link href="/contact">
                                <span className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md font-medium">
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {user ? (
                                <div className="relative">
                                    <button
                                        className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md text-base font-medium"
                                        onClick={toggleMenu}
                                    >
                                        My Profile
                                    </button>
                                    {isOpen && (
                                        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                            {user.type === 'admin' && (
                                                <Link href="/dashboard">
                                                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                        Admin Dashboard
                                                    </span>
                                                </Link>
                                            )}

                                            <Link href="/profile">
                                                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Profile Settings
                                                </span>
                                            </Link>
                                            <button
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={handleLogout}
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link href="/signin">
                                        <span className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md text-sm font-medium">
                                            Sign In
                                        </span>
                                    </Link>
                                    <Link href="/signup">
                                        <span className="text-gray-500 hover:text-customBackgroundColor px-3 py-2 rounded-md text-sm font-medium">
                                            Sign Up
                                        </span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-customBackgroundColor hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${
                                    isOpen ? 'hidden' : 'block'
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${
                                    isOpen ? 'block' : 'hidden'
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/restaurants">
                            <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                Restaurants
                            </span>
                        </Link>
                        <Link href="/about">
                            <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </span>
                        </Link>
                        <Link href="/contact">
                            <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </span>
                        </Link>
                        {user ? (
                            <>
                                {user.type === 'admin' && (
                                    <Link href="/dashboard">
                                        <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                            Admin Dashboard
                                        </span>
                                    </Link>
                                )}
                                <Link href="/profile">
                                    <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                        Profile Settings
                                    </span>
                                </Link>
                                <button
                                    className="text-gray-500 hover:text-customBackgroundColor block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    onClick={handleLogout}
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                        Sign In
                                    </span>
                                </Link>
                                <Link href="/signup">
                                    <span className="text-gray-500 hover:text-customBackgroundColor block px-3 py-2 rounded-md text-base font-medium">
                                        Sign Up
                                    </span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
