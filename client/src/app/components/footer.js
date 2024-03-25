  import React from 'react';
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTelephone,
  BsEnvelope,
} from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="pg- bg-white py-8 px-4 md:px-8">
        <div className="main-footer">
          <div className="top-footer flex flex-wrap justify-between">
            <div className="mini-footer w-full sm:w-auto mb-4 sm:mb-0">
              <h2 className="text-black mb-4">Contact Us</h2>
              <ul>
                <li className="text-black flex items-center mb-2">
                  <AiOutlineHome className="home-icon mr-2" />{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
                <li className="text-black flex items-center mb-2">
                  <BsTelephone className="home-icon mr-2" />{' '}
                  123-456-789
                </li>
                <li className="text-black flex items-center">
                  <BsEnvelope className="home-icon mr-2" />{' '}
                  Orderio@Orderio.com
                </li>
              </ul>
            </div>
            <div className="mini-footer">
              <div className="mini-footer text-black">
                <h2 className="text-black mb-4">My Account</h2>
                <ul>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>Wish List</li>
                  <li>NewsLetter</li>
                  <li>Specials</li>
                </ul>
              </div>
            </div>
            <div className="mini-footer">
              <div className="mini-footer text-black">
                <h2 className="text-black mb-4">Information</h2>
                <div className='mini-footer'>
                  <ul>
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Brands</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mini-footer">
              <div className="mini-footer text-black">
                <h2 className="text-black mb-4">Information</h2>
                <ul>
                  <li>Contact Us</li>
                  <li>Returns</li>
                  <li>Site Map</li>
                  <li>Gift Certificates</li>
                  <li>Affiliates</li>
                </ul>
              </div>
            </div>
            <div className="social-accounts flex justify-center mt-4">
              <BsTwitter className="tweet-icon mx-2" />
              <BsFacebook className="tweet-icon mx-2" />
              <BsInstagram className="tweet-icon mx-2" />
              <BsPinterest className="tweet-icon mx-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

