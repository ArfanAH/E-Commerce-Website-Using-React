import React from 'react';
import { GiReturnArrow } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

function ReturnWarranty({ itemDetail }) {
  return (
    <div>
      {itemDetail?.return ?<div className='mt-5 p-4 rounded-xl border shadow-md'>
        <h2 className='text-sm font-semibold mb-2'>Return and Warranty</h2>
        <div className='flex items-center mb-2'>
          <GiReturnArrow className='text-lg mr-2' />
          <h2 className='font-bold text-sm'>{itemDetail?.return}</h2>
        </div>
        <div className='flex items-center'>
          <FaShieldAlt className='text-lg mr-2' />
          <h2 className='font-bold text-sm'>{itemDetail?.warranty}</h2>
        </div>
      </div> :
        <div className='mt-5 w-full rounded-xl h-[100px] bg-slate-300 animate-pulse'>
        </div>}
    </div>
  );
}

export default ReturnWarranty;
