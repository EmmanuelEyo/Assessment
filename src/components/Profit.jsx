import React from 'react'
import { RiPieChart2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


const Profit = () => {
  return (
    <div className="bg-white shadow-lg ml-[52rem] mt-[-14.5rem] p-8 sm:p-8 sm:py-9 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center w-64">
      <div className='flex flex-col'>
        <div className='flex space-x-32'>
          <div class="bg-green-200 rounded-md p-3">
            <div className='text-green-500'>
              <RiPieChart2Fill />
            </div>
          </div>
          <div className='text-xl'>
            <BsThreeDotsVertical />
          </div>
        </div>
        <p className='mt-4 text-gray-400'>Profit</p>
        <p className='text-2xl mt-2 text-gray-600 font-semibold'>$12,628</p>
        <div className="text-purple-600 text-sm sm:text-md items-center mt-4">
          <FaArrowUp className='text-green-500 text-lg' />
        </div>
        <span className='text-green-500 ml-5 mt-[-20px] top-0'>72.8%</span>
      </div>
    </div>
  )
}

export default Profit