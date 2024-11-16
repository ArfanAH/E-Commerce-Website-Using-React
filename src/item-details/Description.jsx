import React from 'react'

function Description({itemDetail}) {
  return (
    <div>
      {itemDetail?.description ?
        <div className='p-5 rounded-xl bg-white shadow-md mt-6 border'>
          <h2 className='my-2 font-medium text-md md:text-2xl'>Description</h2>
          <p className='text-sm md:text-md'>{itemDetail?.description}</p>
        </div> :
        <div className='w-full h-[100px] mt-7 bg-slate-300 animate-pulse rounded-xl'>

        </div>}
    </div>
  )
}

export default Description
