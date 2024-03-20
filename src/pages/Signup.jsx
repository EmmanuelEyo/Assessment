import React, {useState} from 'react'
import Layout from './Layout'
import { FaFacebook, FaGoogle } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import './style.css'

const Signup = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthStatus } = useStateContext();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      setAuthStatus(true);
      navigate('/dashboard');
    } else {
      alert('Password must be at least 8 characters long.');
    }
  };

  const FacebookIcon = () => (
    <div className='bg-white rounded-full shadow-md flex items-center justify-center h-12 w-12'>
      <p className='text-blue-600 text-3xl font-semibold'>
        <FaFacebook />
      </p>
    </div>
  )

  const GoogleIcon = () => (
    <div className='bg-white rounded-full shadow-md flex items-center justify-center h-12 w-12'>
      <p className='text-red-600 text-2xl font-semibold'>
        <FaGoogle />
      </p>
    </div>
  )
  return (
    <Layout>
    <div className='flex items-center justify-center min-h-screen'>
<div className='max-w-md w-full px-6'>
 <div className='bg-white rounded-xl py-3 shadow-lg px-10'> 
   <h2 className='text-3xl font-bold text-purple-900 mb-8 mt-8 text-center'>Sign Up</h2> 
   <form onSubmit={handleSubmit} className='space-y-3'>
      <div className='mb-4'>
        <input type="text" placeholder='Your first Name' className='px-10 py-5 text-xl font-bold bg-gray-100 rounded-3xl placeholder-purple-900 mt-4 shadow-lg outline-none w-full' />
      </div>
      <div className='mb-4'>
        <input type="text" placeholder='Your last Name' className='px-10 py-5 text-xl font-bold bg-gray-100 rounded-3xl placeholder-purple-900 mt-4 shadow-lg outline-none w-full' />
      </div>
     <div className='mb-4'>
       <input type="text" placeholder='Username or Email' className='px-10 py-5 text-xl font-bold bg-gray-100 rounded-3xl placeholder-purple-900 mt-4 shadow-lg outline-none w-full' />
     </div>
     <div className='mb-4'>
       <input type="password" placeholder='Password' onChange={handlePasswordChange} value={password} className='px-10 py-5 text-xl font-bold bg-gray-100 rounded-3xl placeholder-purple-900 mt-4 shadow-lg outline-none w-full' />
     </div>
     <div className='flex justify-center'>
       <button type='submit' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold px-14 py-4 rounded-full'>SIGN UP</button>
     </div>
   </form>
   <p className='mt-14 text-gray-400 text-center'>Or signup with</p>
   <div className='flex justify-center mt-8 space-x-3'>
     <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><FacebookIcon /></button>
     <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><GoogleIcon /></button>
   </div>
 </div>
</div>
</div>
 </Layout>
  )
}

export default Signup