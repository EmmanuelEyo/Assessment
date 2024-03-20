import React from 'react'
import { SideBar, Navbar } from './components';
import { useStateContext } from './contexts/ContextProvider';

const Layout = ({ children }) => {
  const { activeMenu } = useStateContext();
  return (
    <div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar bg-white'>
              <SideBar />
            </div>
          ) : (
            <div className='w-0'>
              <SideBar />
            </div>
          )}
          <div className={`bg-white min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-[#FAFBFB] navbar w-full'>
              <Navbar />
            </div>
            <div>
              { children }
            </div>
          </div>
          </div>
  )
}

export default Layout;