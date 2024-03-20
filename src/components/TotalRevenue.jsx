import React, { useEffect, useState } from 'react';
import BarChar from './charts/BarChar'
import { BiChevronDown } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { GoFileDirectory } from 'react-icons/go';
import '../pages/style.css'
import '../App.css'

const TotalRevenue = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((elem) => {
      const dots = parseInt(elem.getAttribute('data-dots'), 10);
      const marked = parseInt(elem.getAttribute('data-percent'), 10);
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 450 / dots;
      let points = '';

      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i * 0.6}; --rot: ${rotate}deg"></div>`;
      }

      elem.innerHTML = points;

      const pointsMarked = elem.querySelectorAll('.points');

      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
      }
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="mt-[1rem] revenue-body ml-12 flex shadow-lg w-[48rem] divider p-16">
      <div className='chart'>
        <div className="flex">
          <h1 className='revenue-text'>Total Revenue</h1>
          <span className="text-xl revenue-dot">
            <BsThreeDotsVertical />
          </span>
        </div>
        <BarChar />
      </div>
      <div className="ml-11 revenue-dropdown-main mt-[-50px]">
        <button
          id="dropdownHoverButton"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="text-white revenue-dropdown bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          2023 <BiChevronDown className="w-2.5 h-2.5 ms-3" />
        </button>
        {isHovered && (
          <div
            id="dropdownHover"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#2022"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  2022
                </a>
              </li>
              <li>
                <a
                  href="#2023"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  2023
                </a>
              </li>
            </ul>
          </div>
        )}
        <div>
          <div className="box">
            <div
              className="circle mr-14"
              data-dots="78"
              data-percent="78"
              style={{ '--bgColor': '#9370db' }}
            ></div>
            <div className="text">
              <h2>78%</h2>
              <small>JavaScript</small>
            </div>
          </div>
        </div>
        <div className="text-lg revenue-p text-gray-500">
          <span>62% Company Growth</span>
        </div>
        <div className="flex space-x-6 revenue-box mt-7">
          <div className="text-purple-500 space-x-1 flex">
            <div className="bg-purple-300 rounded-md p-3 text-xl">
              <BiDollar />
            </div>
            <div className="text-gray-400">
              2023 <br /> <div className="font-bold font-lg">$32.5k</div>
            </div>
          </div>
          <div className="text-blue-500 space-x-1 flex">
            <div className="bg-blue-300 rounded-md p-3 text-xl">
              <GoFileDirectory />
            </div>
            <div className="text-gray-400">
              2022 <br /> <div className="font-bold font-lg">$41.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
