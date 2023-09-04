import React from 'react';
import { Link } from 'react-scroll';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase , BsChatSquare } from 'react-icons/bs';



const Nav = () => {
  return <nav className='fixed top-2 lg:top-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto w-[400px] lg:w-full h-[90px] lg:h-[100px]  ">
      <div className='w-full bg-black/20 h-[96px] backdrop:blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-3xl text-white/70'>
        <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
        <BiHomeAlt />
        </Link> 
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser />
        </Link> 
        <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
        <BsClipboardData />
        </Link> 
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
        <BsBriefcase />
        </Link> 
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
        <BsChatSquare />
        </Link>
      </div>
    </div>

  </nav>;
};

export default Nav;