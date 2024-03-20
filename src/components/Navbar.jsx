import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { MdWbSunny, MdBrightness3 } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, setScreenSize, screenSize } = useStateContext();

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <motion.div
      className={`fixed top-1 left-${activeMenu ? '80' : '50'} right-5 z-20 p-4 bg-white shadow-md border rounded-xl`}
      style={{ width: activeMenu ? 'calc(105vw - 360px)' : 'calc(100vw - 40px)' }}
      initial={{ opacity: 0, x: '-50%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <AiOutlineMenu onClick={handleActiveMenu} className="text-2xl md:text-xl" />
          <BsSearch className="text-gray-400 text-xl font-bold md:hidden" />
          <input
            type="text"
            placeholder="Search"
            className="pl-2 pr-1 py-1 focus:outline-none text-sm md:text-base hidden md:block"
            style={{ maxWidth: 'calc(100vw - 240px)' }}
          />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
          <FaGithub size={20} className="hidden md:block" />
          <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
          {darkMode ? (
            <MdBrightness3 size={20} className='hidden md:block' onClick={handleDarkMode} />
          ) : (
            <MdWbSunny size={20} className='hidden md:block' onClick={handleDarkMode} />
          )}
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full w-6 h-6 md:w-8 md:h-8"
            />
            <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;










