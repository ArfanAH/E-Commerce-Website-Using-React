import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
      <h2 className='text-lg'>
        Find your dearest products in our e-commerce website
      </h2>
        <h2 className='text-[60px] font-bold '>Find Your Dream Products</h2>
        <Search />
        <img src='landing page.png' className='w-[750px] h-[460px]'/>
      </div>
    </div>
  )
}

export default Hero
