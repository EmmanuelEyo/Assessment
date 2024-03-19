import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
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
    <div className='flex flex-col items-center justify-center bg-purple-200 min-h-screen'>
      <div className='max-w-md w-full px-8'>
        <div className='bg-gray-100 flex flex-col justify-center items-center rounded-xl py-10 shadow-lg'>
          <h2 className='text-3xl font-bold text-purple-900 mb-8 mt-8'>Sign In</h2> 
          <form>
            <div className='mb-2'> {/* Reduced margin-bottom */}
              <input type="text" placeholder='username or email' className='px-10 py-5 text-xl font-bold bg-white rounded-3xl placeholder-purple-900 mt-4 shadow-xl outline-none' />
            </div>
            <div> {/* Removed mb-4 for the second input field */}
              <input type="password" placeholder='password' className='px-10 py-5 text-xl font-bold bg-white rounded-3xl placeholder-purple-900 mt-4 shadow-xl outline-none' />
            </div>
            <div className='flex justify-center mt-6'>
              <button type='submit' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold px-14 py-4 rounded-full'>SIGN IN</button>
            </div>
          </form>
          <p className='mt-14 text-gray-400'>Or login with</p>
          <div className='flex space-x-4 mt-8'>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><FacebookIcon /></button>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><GoogleIcon /></button>
          </div>
          <div className='mt-28'>
            <a href='https://google.com' className='text-gray-500 font-semibold transition ease-in-out delay-150 duration-300 hover:text-gray-400'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;