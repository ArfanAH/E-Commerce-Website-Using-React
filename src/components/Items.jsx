import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import { Link, useParams } from 'react-router-dom';

function Items({ item }) {

  const maxLength = 20; 
  

  return (

    <Link to={'/item-details/'+item?.id} >
      <div className="border bg-white rounded-xl hover:shadow-md cursor-pointer">
        <img 
          src={item?.images[0]}  
          alt={item.productName} 
          width={'100%'} 
          className='rounded-t-xl h-[180px] object-cover '
          onError={(e) => { e.target.src = '/default-image.jpg'; }}
        />
        <div className='p-2'>
          <h3 className="font-semibold">{item?.productName}</h3>
          <p className="text-black-600">${item?.price}</p>
          <p className="text-sm text-gray-500">
            {item.description.length > maxLength
              ? `${item.description.slice(0, maxLength)}...`
              : item.description} 
          </p>
          <p className="text-black flex items-center">
            <FaStar className="mr-1 text-yellow-500" />
            {item.rating}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Items;
