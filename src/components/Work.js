import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';


const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col items-end gap-y-12 mb-10 lg:mb-0'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          className='flex flex-col items-start'>
            <h2 className='h2 leading-tight text-[69px] text-accent'>
              My Latest <br/>
              Work
            </h2>
           <button className='btn btn-sm'>VIEW PROJECTS</button>
          </motion.div>
          <motion.div 
          variants={fadeIn("right",0.3)}
          initial="hidden"
          whileInView={"show"}
          className='group relative overflow-hidden border-2 w-[500px] h-[250px] border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 absolute w-full h-full z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all h-full  duration-500' src={Img1} alt=' ' />
            <div className=' font-tertiary absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UX/UI DESIGNS
                </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
              <span className='text-white/80 font-tertiary font-semibold text-2xl'>AMBUVIANS WEBSITE</span>
            </div>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 w-[500px] h-[250px] border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 absolute w-full h-full z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all h-full  duration-500' src={Img2} alt=' ' />
            <div className=' font-tertiary absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>WEBSITES
                </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
              <span className='text-white/80 font-tertiary font-semibold text-2xl'>TWITTER CLONE</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 w-[500px] h-[250px] border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 absolute w-full h-full z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all h-full  duration-500' src={Img3} alt=' ' />
            <div className=' font-tertiary absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>MANAGEMENT
                </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
              <span className='text-white/80 font-tertiary font-semibold text-2xl'>ENDEAVOUR 2K23</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  </section>;
};

export default Work;
