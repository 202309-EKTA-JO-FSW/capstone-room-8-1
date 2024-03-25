// app/contact/page.js
import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-customOrange">
                Contact Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-4">
                        If you have any questions, concerns, or feedback, please
                        don&apos;t hesitate to reach out to us. Our friendly
                        support team is here to assist you.
                    </p>
                    <ul className="space-y-4">
                        <li>
                            <span className="font-semibold">Email:</span>{' '}
                            <a
                                href="mailto:contact@orderio.com"
                                className="text-orange-600 hover:underline"
                            >
                                contact@orderio.com
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">Phone:</span> +1
                            (123) 456-7890
                        </li>
                        <li>
                            <span className="font-semibold">Address:</span> 123
                            Food Street, City, Country
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Send us a Message
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block font-semibold mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-semibold mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block font-semibold mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-customOrange text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
