import Link from 'next/link';

export default function HeroSection() {
    return (
        <div>
            <div className="relative h-[calc(100vh-64px)] overflow-hidden text-white">
                <div className="absolute inset-0">
                     <img
                        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Background Image"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative flex h-full flex-col items-center justify-center text-center">
                    <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize">
                        Welcome to Orderio, The Awesome food hub
                    </h1>
                    <p className="mb-8 text-lg text-gray-300">
                        Discover amazing features and services that await you.
                    </p>
                    <Link
                        href="/restaurants"
                        className="transform rounded-full bg-customOrange px-6 py-2 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:scale-105 hover:bg-[#FD7014] hover:shadow-lg"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
