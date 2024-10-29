import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      <Link to={'/'}>
        <img src='ecommerce.svg' alt='ecommerce' width={60} height={50} />
      </Link>
      <ul className='hidden md:flex gap-16'>
        <Link to={'/'}>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        </Link>
        <Link to={'/category'}>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Categories</li>
        </Link>
        <Link to={'/aboutus'}>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>About Us</li>
        </Link>
      </ul>
      

      <div className='flex items-center gap-5'>

      <Link to={'/cart'} className='relative'>
        <FaShoppingCart className='text-3xl' />
      </Link>

      {isSignedIn ? (
        <div >
          <UserButton />
        </div>
      ) : (
        <SignInButton mode='modal' forceRedirectUrl='/'>
          <Button className="bg-yellow-300 border rounded-xl shadow-md hover:bg-yellow-600">Log in</Button>
        </SignInButton>
      )}


      </div>

      
    </div>
  );
}

export default Header;