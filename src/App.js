// App.js
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar, Navbar } from './components';
import { Account, Register, Dashboard } from './pages';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <Router>
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
              <Routes>
                {/* Dashboard */}
                <Route path='/dashboard' element={<Dashboard />} />

                {/* Account Settings */}
                <Route path='/account-settings' element={<Account />} />

                {/* Pages */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
          </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

