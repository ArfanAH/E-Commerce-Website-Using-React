import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Button } from '@/components/ui/button';

function Price({ itemDetail }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < itemDetail?.stockQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      {itemDetail?.price ? (
        <div className='p-10 rounded-xl border shadow-md'>
          <h2 className='text-xl font-semibold'>Price</h2>
          <h2 className='font-bold text-4xl'>৳ {itemDetail?.price * quantity}</h2>

          <div className='flex items-center mt-4'>
            <Button
              className={`w-8 h-8 rounded-full hover:bg-blue-700 ${quantity === 1 ? 'bg-gray-300' : 'bg-blue-500'}`}
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <p className='text-white text-sm'>-</p>
            </Button>
            <span className='mx-4 text-lg'>{quantity}</span>
            <Button
              className={`w-8 h-8 rounded-full hover:bg-blue-700 ${quantity >= itemDetail?.stockQuantity ? 'bg-gray-300' : 'bg-blue-500'}`}
              onClick={increaseQuantity}
              disabled={quantity >= itemDetail?.stockQuantity}
            >
              <p className='text-white text-sm'>+</p>
            </Button>
          </div>

          <Button
            className="w-full mt-7 bg-blue-500 text-white rounded-xl border hover:bg-blue-600"
            size="lg"
          >
            <FaCartPlus className='text-lg mr-2 text-black' />Add to Cart
          </Button>
        </div>
      ) : (
        <div className='w-full rounded-xl h-[200px] bg-slate-300 animate-pulse'></div>
      )}
    </div>
  );
}

export default Price;
