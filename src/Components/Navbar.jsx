
import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../assets'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center py-1 px-[120px] bg-gray-200">
  <div className="flex space-x-6">
    <ul className='flex  gap-7'>
    {
  navbar.map((item, index) => (
    <li
      className={`font-mdlight ${
        item.lable === "BuyNow" ? "text-red-500 font-bold" : "text-black"
      }`}
      key={index}
    >
      <Link to={item.path}>{item.lable}</Link>
    </li>
  ))
}

    </ul>
    
  </div>
  <div className="flex justify-between p-4 ">
  <p className="text-black font-mdlight">Iceland</p>
  <p className="text-black font-mdlight">USD - US Dollar</p>
</div>


</nav>

    </>
  )
}

export default Navbar