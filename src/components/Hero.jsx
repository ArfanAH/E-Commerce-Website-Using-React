import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-6 sm:p-10 py-12 sm:py-20 gap-6 h-auto w-full bg-[#eef0fc]'>
        <h2 className='text-sm sm:text-lg text-center'>
          Find your dearest products in our e-commerce website
        </h2>
        <h2 className='text-4xl sm:text-[60px] font-bold text-center'>
          Find Your Dream Products
        </h2>
        <Search />
        <img
          src='landing page.png'
          className='w-full h-[200px] sm:w-[750px] md:h-[500px] max-w-full mx-auto'
          alt="Landing"
        />
      </div>
    </div>
  );
}

export default Hero;
