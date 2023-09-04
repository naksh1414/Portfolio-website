import React from 'react';
import Image from '../assets/avatar.png';
import {FaGithub, FaInstagram,FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section className='min-h-[95vh] lg:min-h-[78vh] mt-6' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center lg:text-left  text-white font-primary '>
          <motion.h1 variants={fadeIn('down',0.3)} 
          initial="hidden"
          whileInView={'show'} 
          className='leading-[1] text-[48px] mt-8  lg:text-[55px]'>NAKSHATRA <span>MANGLIK</span></motion.h1>
          <motion.div  variants={fadeIn('down',0.3)}
          initial="hidden"
          whileInView={'show'}
          className='mb-6 mt-6 font-secondary'>
          <TypeAnimation sequence={[
              ' Developer',
              2000,
              ' Designer',
              2000,
              ' Manager',
              2000
            ]}
            speed={20}
            className='text-accent/100 text-[48px] font-semibold uppercase leading-[1] ' 
            repeat={Infinity}
            />
          </motion.div>
          <motion.p  variants={fadeIn('down',0.3)}
          initial="hidden"
          whileInView={'show'}
          className='text-[20px] font-tertiary mb-4 max-w-lg mx-auto lg:mx-0 '>
          "Creating beautiful and functional experiences that make people happy"
 
            </motion.p>
            <motion.div
              variants={fadeIn('down',0.3)}
               initial="hidden"
                whileInView={'show'}
                 className='max-w-max mx-auto lg:mx-0 py-4 '>
              <a href="home" className='text-gradient btn-link '> MY PORTFOLIO</a>
            </motion.div>
            <motion.div  
            variants={fadeIn('down',0.3)}
             initial="hidden"
              whileInView={'show'}
                className='flex items-center justify-center text-3xl space-x-6 lg:max-0 max-w-max mx-auto mt-2'>
              <a href="https://github.com/naksh1414" className='hover:bg-white/60 rounded-3xl'>
              <FaGithub/>
              </a>
              <a href="https://www.instagram.com/_naksh____" className='hover:bg-white/60 rounded-xl'>
              <FaInstagram/>
              </a>
              <a href="https://www.linkedin.com/in/nakshatra-manglik"className='hover:bg-white/60 rounded-lg'>
              <FaLinkedin/>
              </a>
            </motion.div>
          </div>
        <motion.div 
         variants={fadeIn('up',0.3)}
          initial="hidden"
           whileInView={'show'} 
            className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px] items-center justify-center mx-auto mb-8 mr-6'>
          <img src={Image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
