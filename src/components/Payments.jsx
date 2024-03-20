import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { IoLogoPaypal } from "react-icons/io5";


const Payments = () => {
  return (
    <div className="payments-body shadow-lg p-8 sm:p-8 sm:py-9 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center w-64">
      <div className='flex flex-col payments-shift'>
        <div className='flex payments-space'>
          <div class="bg-pink-200 rounded-md p-3">
            <div className='text-pink-500'>
              <IoLogoPaypal />
            </div>
          </div>
          <div className='text-xl payments-dot'>
            <BsThreeDotsVertical />
          </div>
        </div>
        <p className='mt-4 text-gray-400'>Payments</p>
        <p className='text-2xl mt-2 text-gray-600 font-semibold'>$2,468</p>
        <div className="text-purple-600 text-sm sm:text-md items-center mt-4">
          <FaArrowDown className='text-red-500 text-lg' />
        </div>
        <span className='text-red-500 ml-5 mt-[-20px] top-0'>-14.82%</span>
      </div>
    </div>
  )
}

export default Payments;