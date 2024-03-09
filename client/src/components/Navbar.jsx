'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link className="text-white font-bold" href="/">

                My Website
     
            </Link>
          </div>
          {/* Navbar links */}
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/" passHref>
         
                  Home
    
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/dishes" passHref>
           
                  Dishes
           
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/about" passHref>
           
                  About
              
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact" passHref>
      
                  Contact
            
              </Link>
              {/* Sign-in and Sign-up links */}
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/SignIn" passHref>
               
                  Sign In
            
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/SignUp" passHref>
                
                  Sign Up
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
