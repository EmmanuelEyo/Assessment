import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
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
    <div className={`fixed top-4 left-${activeMenu ? '80' : '50'} right-5 z-20 p-4 bg-white shadow-md border rounded-xl transition-all duration-300`} style={{ width: activeMenu ? 'calc(100vw - 360px)' : 'calc(100vw - 40px)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <AiOutlineMenu onClick={handleActiveMenu} className="text-2xl md:text-xl" />
          <BsSearch className="text-gray-400 text-xl font-bold hidden md:block" />
          <input
            type="text"
            placeholder="Search"
            className="pl-2 pr-1 py-1 focus:outline-none text-sm md:text-base"
            style={{ maxWidth: 'calc(100vw - 240px)' }}
          />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <FaGithub size={20} className="hidden md:block" />
          <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
          <MdWbSunny size={20} className="hidden md:block" />
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
    </div>
  );
};

export default Navbar;








