

import React from 'react'
import { FaRegUser,FaRegHeart,FaShoppingBasket   } from "react-icons/fa";
import {Images} from   "../assets"


const Hero = () => {
    return (
        <div className="flex flex-col">
          
          <div className="flex justify-between items-center px-16 py-4 bg-gray-100 shadow-md">
           <img src={Images.logo} alt="...loading"  className='w-32'   />
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search entire store here..."
                className="w-full px-4 py-2 border  text-sm focus:outline-none "
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-black"><b>Call Us: +842437955813</b></button>
              <div className="flex items-center space-x-2">
                <button className="text-black"><FaRegUser className='size-5' /></button>
                <button className="text-black"> < FaRegHeart className='size-5'  />  </button>
                <button className="text-black"> < FaShoppingBasket  className='size-5' />  </button>
              </div>
            </div>
          </div>
    
          
          <div className="flex flex-col lg:flex-row p-8">

            <div className="w-full lg:w-1/4 p-0">
          <h3 className="font-bold bg-cyan-500  text-white text-center py-4">DEPARTMENTS</h3>
          <ul className="space-y-0 divide-y divide-gray-300">
            <li className="border py-2 px-4">Value of the Day <span className="text-green-500 font-bold">New</span></li>
            <li className="border py-2 px-4">New Arrivals</li>
            <li className="border py-2 px-4">Accessories</li>
            <li className="border py-2 px-4">Top 100 Offers</li>
            <li className="border py-2 px-4">Lookbook</li>
            <li className="border py-2 px-4">Computers</li>
            <li className="border py-2 px-4">Watches & Eyewear <span className="text-orange-500 font-bold">Sale</span></li>
            <li className="border py-2 px-4">TV & Audio</li>
            <li className="border py-2 px-4">Bags & Luggage</li>
            <li className="border py-2 px-4">Jewelry <span className="text-red-500 font-bold">Hot</span></li>
          </ul>
        </div>
    
            <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-between items-center lg:pl-6 mt-6 lg:mt-0">
           <div className="relative w-full h[900px] lg:w-1/">
            <img
              src={Images.banner1}
              alt="Banner 1"
              className="w-full h-[480px] object-cover "
            />
            <div className="absolute inset-0 flex flex-col items-start justify-start p-9 text-white">
              <h2 className="text-xl font-medium">Beautiful 2023</h2>
              <h1 className="text-4xl pt-3 font-bold">NEW ARRIVALS</h1>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full">Discover now</button>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 ">
            <img
              src={Images.banner2}
              alt="Banner 2"
              className="w-[270px] h-[480px] object-cover  "
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded">
              <h3 className="text-sm font-medium">Top view in this week</h3>
              <h2 className="text-lg font-bold">TRENDING</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    };

export default Hero