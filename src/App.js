import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Account, Signup, Dashboard } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import Layout from './Layout';

function App() {
  const { activeUser } = useStateContext();

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Router>
      <Routes>
      <Route path='/dashboard' element={ activeUser ? <Layout><Dashboard /></Layout> : <Navigate replace to='/login' /> }>
                  <Route path='account-settings' element={<Layout ><Account /></Layout>} />
                </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={activeUser ? <Signup /> : <Navigate replace to='/signup' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

