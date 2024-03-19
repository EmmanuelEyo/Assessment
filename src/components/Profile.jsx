import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import line_chart from '../data/line_chart.png';

const Profile = () => {
  return (
    <div className="bg-white justify-start shadow-lg ml-[52rem] mt-5 p-4 h-52 sm:p-8 sm:py-1 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center w-[550px]">
      <div>
        <p className="text-gray-500 text-lg sm:text-2xl font-semibold">
          Profile Report
        </p>
        <div className='bg-yellow-100 rounded-full w-24 uppercase text-yellow-500 p-1 font-bold'>
          year 2022
        </div>
        <div className="flex items-center mt-4"> 
          <FaArrowUp className='text-green-500 text-lg' />
          <span className='text-green-500 ml-1'>28.14%</span>
        </div>
        <p className='text-2xl mt-2 text-gray-600 font-semibold'>$84,686K</p>
      </div>
      <div className="hidden sm:block">
        <img
          src={line_chart}
          alt="Line Chart"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Profile;
