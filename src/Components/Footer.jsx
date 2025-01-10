


import React from 'react'
import {Images} from   "../assets"


const Footer = () => {
    return (
      
        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div>
                <img src={Images.logo} alt="Claue Logo" className="mb-6" />
                <p className="mb-2 text-gray-600">184 Main Rd E, St Albans VIC 3021, Australia</p>
                <p className="mb-2 text-gray-600">Email: contact@company.com</p>
                <p className="mb-4 text-gray-600">Phone: +001 2233 456</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">FB</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">TW</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">IG</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">PT</a>
                </div>
              </div>
    
              <div>
                <h3 className="font-bold mb-6 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Men</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Women</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessories</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Shoes</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Denim</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Dress</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-bold mb-6 text-gray-800">Information</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping & Delivery</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-bold mb-6 text-gray-800">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Store Location</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">My Account</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessories</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Orders Tracking</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Size Guide</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-bold mb-6 text-gray-800">Newsletter</h3>
                <p className="mb-6 text-gray-600">Subscribe to our newsletter and get 10% off your first purchase</p>
                <div className="flex items-center rounded-lg overflow-hidden border border-gray-300">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-[300] px-4 py-3 text-sm border-none mr-67 outline-none"
                  />
                </div>
                <button className="bg-black text-white px-5 py-3 rounded-lg  mt-3 text-sm font-semibold hover:bg-gray-800">Subscribe</button>

              </div>
            </div>
            <div className="text-center mt-12 text-gray-500 text-sm">
              &copy; 2023 Copyright By ArrowTheme.
            </div>
          </div>
        </footer>
      );
    };


export default Footer