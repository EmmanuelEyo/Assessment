import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopify } from 'react-icons/si';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink = 'flex items-center pb-2.5 gap-5 pl-4 pt-3 rounded-lg text-gray-400 text-md m-2 hover:text-purple-500 bg-purple-200 transition ease-in-out duration-300';
  const normalLink = 'flex items-center gap-5 pb-2.5 pl-4 pt-3 rounded-lg text-gray-400 text-md m-2 hover:bg-purple-200 hover:text-purple-500 hover:font-semibold transition ease-in-out duration-300';

  const handleCloseSideBar = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  return (
    <div className={`ml-3 h-full top-0 mt-4 fixed left-0 z-50 flex flex-col overflow-auto pb-10 ${activeMenu ? '' : 'hidden'} overflow-y-auto shadow-md`}>
      <div className="flex justify-between items-center">
        <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center flex text-2xl font-extrabold gap-3 ml-6 mt-6 text-gray-600">
          <SiShopify /> <span>sneat</span>
        </Link>
        {/* <TooltipComponent content="Menu" position="BottomCenter">
          <button type="button" onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)} className="text-xl rounded-full p-3 block mt-8 hover:bg-gray-400">
            <MdOutlineCancel />
          </button>
        </TooltipComponent> */}
      </div>
      <div className="mt-2">
        {links.map((item, index) => ( 
          <div key={index}>
            <p className="text-gray-400 uppercase mt-4 m-2">{item.title}</p>
            {item.links.map((link, linkIndex) => ( 
              <NavLink
                to={`/${link.name}`}
                key={linkIndex}
                onClick={handleCloseSideBar}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                {link.icon}
                <span className="capitalize text-lg font-lighter">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;


