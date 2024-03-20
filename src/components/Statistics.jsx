import React from 'react';
import { BsPhone } from "react-icons/bs";
import { PiCoatHanger } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { IoFootballSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import '../pages/style.css';

const Statistics = ({ percentage, color }) => {
  return (
    <div className="statistics-body shadow-lg p-8 sm:p-8 sm:py-9 rounded-lg flex justify-between items-start">
      <div className="w-1/2 mr-4 m-o">
        <h1 className="text-lg mt-[-20px] font-semibold text-gray-500">Order Statistics</h1>
        <p className='text-gray-400'>42.82k Total Sales</p>
        <div className='mt-10'>
          <h2 className="font-semibold text-4xl text-gray-600">8,258</h2>
          <p className='text-gray-400'>Total Orders</p>
        </div>
        <div className="text-purple-500 space-x-1 flex items-center mb-3 mt-20">
          <div className="bg-purple-200 rounded-md p-3 text-xl">
            <BsPhone />
          </div>
          <div className="text-gray-400">
            <p className="font-semibold text-sm">Electronics</p>
            <p className='text-sm flex'>Mobile, <p className='flex'>Earbuds, <p className='ml-1'>TV</p></p></p>
          </div>
        </div>
        <div className="text-green-500 space-x-1 flex items-center mb-3">
          <div className="bg-green-200 rounded-md p-3 text-xl">
            <PiCoatHanger />
          </div>
          <div className="text-gray-400">
            <p className="font-semibold text-sm">Fashion</p>
            <p className='text-sm flex'>Tshirt, <p className='flex'>Jeans, <p className='ml-1'>Shoes</p></p></p>
          </div>
        </div>
        <div className="text-blue-500 space-x-1 flex items-center mb-3">
          <div className="bg-blue-200 rounded-md p-3 text-xl">
            <IoMdHome />
          </div>
          <div className="text-gray-400">
            <p className="font-semibold text-sm">Decor</p>
            <p className='text-sm'>Fine Art, Dining</p>
          </div>
        </div>
        <div className="text-gray-500 space-x-1 flex items-center mb-3">
          <div className="bg-gray-200 rounded-md p-3 text-xl">
            <IoFootballSharp />
          </div>
          <div className="text-gray-400">
            <p className="font-semibold text-sm">Sports</p>
            <p className='text-sm flex'>Football, <p className='flex'>Cricket <p className='ml-1'>Kit</p></p></p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-2xl ml-32 mt-[-20px]">
          <BsThreeDotsVertical />
        </div>
        <div className="container ml-4">
          <div className='card'>
            <div className="percent" style={{ '--clr': color, '--num': percentage }}>
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number text-gray-600">
                <h2>{percentage}<span>%</span></h2>
                <p>Weekly</p>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-20 text-gray-700 font-semibold mt-[-15px]'>
          <p>82.5K</p>
        </div>
        <div className='ml-20 mt-6 text-gray-700 font-semibold'>
          <p>23.8K</p>
        </div>
        <div className='ml-20 mt-10 text-gray-700 font-semibold'>
          <p>849</p>
        </div>
        <div className='ml-20 mt-8 text-gray-700 font-semibold'>
          <p>99</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;