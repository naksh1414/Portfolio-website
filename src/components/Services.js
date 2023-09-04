import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {Link} from 'react-scroll';

const services = [
  {
    name: 'UX/UI',
    description: 'Committed to delivering high-quality work that meets the needs of users',
    Link: 'Learn More'
  },
  {
    name:'DEVELOPMENT',
    description: 'Building intuitive and engaging interfaces that delight users.Coding with passion, led by purpose',
    Link: 'Learn More'
  },
  {
    name:'MANAGEMENT',
    description: 'Leading with purpose and Creating a culture of innovation. Designing for the future, managed with care',
    Link: 'Learn More'
  }

]

const Services = () => {
  return <section className='section mt-28 lg:mt-4' id='services'>
    <div className="container mx-auto ">
      <div className='flex flex-col  items-center justify-center  lg:flex-row'>
        <div className='flex-1 lg:bg-services lg:bg-contain mb-12 lg:mb-0 lg:bg-no-repeat mix-blend-lighten justify-stretch'>
         <motion.h2 
          variants={fadeIn("down",0.3)}
          initial="hidden"
          whileInView={'show'}
         className='h2 text-accent mb-6 ml font-bold'>What I do</motion.h2>
         <motion.h3 
         variants={fadeIn("down",0.3)}
         initial="hidden"
         whileInView={'show'}
         className='h3 max-w-[455px] mb-16 justify-center '>
          I am a UX/UI Designer and Frontend Developer
         </motion.h3>
         <Link to="work">
         <motion.button
         variants={fadeIn("down",0.3)}
         initial="hidden"
         whileInView={'show'}

          className=' flex items-center justify-center ml-14 mt-6 btn btn-sm'>
          MY WORK
         </motion.button>
         </Link>
        </div>
        <motion.div 
        variants={fadeIn("up",0.3)}
        initial="hidden"
        whileInView={'show'}
        
        className='flex-1 mt-6'>
          <div>
            {services.map((service , index)=>{
              const {name , description , Link} = service;
              return(
              <div className='border-b border-white/20 h-[120px] mb-[8px] flex gap-x-8' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6] hover:text-white/50 transition duration-200'>{name}</h4>
                  <p className='font-secondary leading-tight  '>{description}</p>

                </div>
                <div className='flex flex-col items-center'>
                  <a className='cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition duration-200 w-8 h-8 flex items-center justify-center rounded-full' href="work"><BsArrowUpRight/></a>
                  <a className='text-[14px] mt-2 hover:text-[16px] text-cyan-400' href="work">{Link}</a>
                </div>
              </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
