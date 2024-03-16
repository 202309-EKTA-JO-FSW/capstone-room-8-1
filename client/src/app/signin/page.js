'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { FaUserCircle, FaLock, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                Cookies.set('jwt', data.token);

                router.push('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-customBackgroundColor flex flex-grow h-screen">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5 h-full">
                <h1 className="font-bold text-2xl my-10 text-white">Login</h1>
                <form className="mt-2 flex flex-col lg:w-1/2 w-8/12" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <FaUserCircle />
                            </span>
                        </div>
                        <input
                            type="text"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto text-xl outline-none"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                                <FaLock />
                            </span>
                        </div>
                        <input
                            type="password"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                                <FaEyeSlash />
                            </span>
                        </div>
                    </div>
                    {error && (
                        <div className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">{error}</div>
                    )}
                    <a href="#" className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">Forget Password ?</a>
                    <button
                        type="submit"
                        className="bg-customOrange py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
