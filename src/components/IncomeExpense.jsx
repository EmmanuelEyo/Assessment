import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import 'react-circular-progressbar/dist/styles.css';
import  LineChart from './charts/Linechart1'
import { FaArrowUp } from 'react-icons/fa';

const IncomeExpense = () => {
  const [active, setActive] = useState('INCOME');

  return (
    <div className="income-expense-body shadow-lg p-8 sm:p-8 sm:py-9 rounded-lg block grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
      <div className="flex">
        {['INCOME', 'EXPENSES', 'PROFIT'].map((button) => (
          <button
            key={button}
            className={`px-4 py-2 ${
              active === button ? 'bg-blue-500 text-white rounded-lg' : 'text-black'
            }`}
            onClick={() => setActive(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center relative">
        <div className="text-gray-500 mt-[-280px]">
          Total Income <br />
          <div className="flex">
            <p className="font-bold text-2xl">$459.1k</p>
            <FaArrowUp className="text-green-500 ml-4 mt-1" />{' '}
            <p className="text-green-500 ml-2">65%</p>
          </div>
        </div>
        <div className="h-96 w-96 relative">
          <LineChart />
          <div className="absolute top-2 right-2 text-lg text-purple-500 font-semibold">
            {active}
          </div>
          <div className="absolute top-1/2 left-1/2 progress-bar ml-[-200px] mt-44 transform -translate-x-1/2 -translate-y-1/2">
            <CircularProgressbar
              value={60}
              text={`${65}%`}
              strokeWidth={8}
              styles={{
                root: { width: '50px' },
                path: { stroke: '#3E98C7' },
                trail: { stroke: '#d6d6d6' }, 
                text: { fill: '#3E98C7', fontSize: '25px' }, 
              }}
            /> 
          </div>
        </div>
      </div>
      <div className="flex relative items-center ml-24 mt-[-40px]">
          <div className="block">
            <h1 className="text-gray-500 text-xl font-bold">Income this week</h1>
            <p className="text-gray-300">$39k less than last week</p>
          </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
