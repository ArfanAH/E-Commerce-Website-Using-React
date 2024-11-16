import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductList } from '../Shared/Data'; // Adjust the path as needed

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = searchTerm.length > 1
    ? ProductList.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); 
  };

  return (
    <div className='relative p-2 sm:p-4 md:px-5 bg-white rounded-full md:rounded-full  flex items-center gap-2 sm:gap-4 md:gap-5 pl-2 w-[100%] md:w-[50%]'>
      {/* Search Input */}
      <input
        type='text'
        placeholder='Search Here...'
        className='flex-1 outline-none bg-transparent text-gray-700 p-2 sm:p-2'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* Search Button with Icon */}
      <Link to={'/Search?product=' + encodeURIComponent(searchTerm)}>
        <button className='text-gray-500 hover:text-gray-700 transition-all'>
          <FaSearch size={20} />
        </button>
      </Link>

      {/* Display filtered product list below the search bar */}
      {searchTerm.length > 1 && filteredProducts.length > 0 && (
        <div className='absolute top-full mt-2 left-0 w-full bg-white shadow-lg p-3'>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className='p-2 border-b last:border-b-0 cursor-pointer rounded-3xl hover:bg-gray-100'
              onClick={() => handleSuggestionClick(product.name)} // On suggestion click
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
