import React from 'react';
import hero_img_working from '../data/hero_img_working.png';

const Hero = () => {
  return (
    <div className="bg-white justify-start shadow-lg ml-10 mt-32 p-4 sm:p-8 sm:py-1 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center max-w-screen-md">
      <div>
        <p className="text-purple-800 text-lg sm:text-2xl font-semibold">
          Congratulations John! 🎉
        </p>
        <p className="text-purple-600 text-sm sm:text-md mt-6">
          You have done more than 72% 😍 more sales today. <br /> Check your new
          raising badge in your profile
        </p>
        <button className="bg-purple-200 text-purple-500 font-semibold px-4 py-1 rounded mt-5 text-sm">
          VIEW BADGES
        </button>
      </div>
      <div className="hidden sm:block">
        <img
          src={hero_img_working}
          alt="Illustration of a person working"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;





