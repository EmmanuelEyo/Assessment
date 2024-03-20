// Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='flex items-center justify-center min-h-screen' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh' }}>
      {children}
    </div>
  );
};

export default Layout;

