import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import { CategoryList } from '../Shared/Data';

function Category() {
  return (
    <div className='mt-60'>
      <h2 className='font-bold text-3xl text-center mb-6'>Top Categories</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 px-20 pb-10'>
        {CategoryList.map((category) => (
          <Link 
            key={category.name} // Add a unique key prop
            to={'Search/' + category.name} 
            aria-label={`Go to ${category.name} category`} // Add an aria-label for accessibility
          >
            <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
              <div className='text-3xl'>{category.icon}</div>
              <h2 className='mt-2'>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
