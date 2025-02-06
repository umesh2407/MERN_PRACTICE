import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">FoodiesHub</h3>
          <p className="text-gray-400">
            Your favorite food delivered fast at your door. Fresh ingredients, delicious recipes, and great service.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              123 Food Street, Flavor Town
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              support@foodieshub.com
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FoodiesHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;