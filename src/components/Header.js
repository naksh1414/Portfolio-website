import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='top-0 lg:top-0'  >
    <div className="container mx-auto top-0 lg:top-0">
      <div className='flex justify-between items-center'>
        <a href="home">
          <img src={logo} className='h-[150px] w-[200px]' alt=' ' />
        </a>
         <Link to="contact">
        <button type='button'
         className=" text-white bg-gradient-to-r mt-6 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-3 text-center mr-2 mb-2 rounded-full">
          CONNECT WITH ME 
          </button>
          </Link>
      </div>
    </div>

  </header>;
};

export default Header;
