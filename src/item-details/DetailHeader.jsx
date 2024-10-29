import React from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiCplusplusbuilder } from "react-icons/si";

function DetailHeader({itemDetail}) {
  return (
    <div>
      {itemDetail?.productName ? <div>
        <h2 className='font-bold text-3xl'>{itemDetail?.productName}</h2>
        <p className='text-sm'>{itemDetail?.category}</p>
        <div className='flex gap-2 mt-2'>
          <div className='flex gap-1 items-center bg-blue-50 rounded-full p-1 px-3'>
            <MdOutlineProductionQuantityLimits className='h-4 w-4 text-primary' />
            <h2 className='text-primary text-sm'>{itemDetail?.stockQuantity}</h2>
          </div>
          <div className='flex gap-1 items-center bg-blue-50 rounded-full p-1 px-3'>
            <SiCplusplusbuilder className='h-4 w-4 text-primary' />
            <h2 className='text-primary text-sm'>{itemDetail?.brand}</h2>
          </div>
        </div>
      </div> :
        <div className='w-full rounded-xl h-[100px] bg-slate-300 animate-pulse'>
        </div>}
    </div>
  )
}

export default DetailHeader
