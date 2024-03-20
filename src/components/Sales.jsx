import React from 'react'
import { RiPieChart2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


const Sales = () => {
  return (
    <div className="sales-body shadow-lg p-8 py-7 rounded-lg items-center">
      <div className='flex flex-col sales-shift'>
        <div className='flex sales-space'>
          <div class="bg-blue-200 rounded-md p-3">
            <div className='text-blue-500'>
              <RiPieChart2Fill />
            </div>
          </div>
          <div className='text-xl sales-dot'>
            <BsThreeDotsVertical />
          </div>
        </div>
        <p className='mt-4 text-gray-400'>Sales</p>
        <p className='text-2xl mt-2 text-gray-600 font-semibold'>$4,679</p>
        <div className="text-purple-600 text-sm sm:text-md items-center mt-4">
          <FaArrowUp className='text-green-500 text-lg' />
        </div>
        <span className='text-green-500 ml-5 mt-[-20px] top-0'>28.42%</span>
      </div>
    </div>
  )
}

export default Sales;