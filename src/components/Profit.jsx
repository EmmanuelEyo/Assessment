import React from 'react'
import { RiPieChart2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


const Profit = () => {
  return (
    <div className="shadow-lg profit-body p-8 py-7 rounded-lg items-center">
      <div className='flex flex-col profit-shift'>
        <div className='flex profit-space'>
          <div class="bg-green-200 rounded-md p-3">
            <div className='text-green-500'>
              <RiPieChart2Fill />
            </div>
          </div>
          <div className='text-xl profit-dot'>
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