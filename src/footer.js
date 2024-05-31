import React from 'react';

import { FaInstagram, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d2b] text-white py-10 ">
      <div className="container mx-auto px-4 flex flex-wrap justify-between ">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Pavyon</h2>
          <p className="text-gray-400 mb-6">
            The Pavyon template empowers businesses to showcase their offerings with a visually stunning interface and immersive digital experience.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDribbble /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

            <div className='flex flex-wrap justify-around pr-80 px-100'>
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Utility Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Register</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">404</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">More Templates</a></li>
          </ul>
        </div>
            </div>
      </div>
      <div className="text-center mt-10 text-gray-400">
        <p>Copyright ©2024 ucas.studio</p>
      </div>
    </footer>
  );
};

export default Footer;