import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,

  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto mt-12">
      <div className='flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ml-10 lg:ml-0'>
        <motion.div
        variants={fadeIn('right',0.3)} 
        initial="hidden"
        whileInView={"show"}
        className='flex-1 bg-about bg-contain items-center justify-center bg-no-repeat h-[500px] opacity-70 filter:invert(0) bg-top'>
      </motion.div>
        <motion.div 
        variants={fadeIn('left',0.3)}
        initial="hidden"
        whileInView={"show"}
         className='flex-1' >
          <h2 className='h2 lg:pl-0 text-accent font-semibold text-[48px]'>ABOUT ME</h2>
          <h3 className='h3 mb-4'> 
            I am a UX/UI Designer and Frontend Developer 
          </h3>
          <p className='mb-6'>
          Expertise in all aspects of UX/UI design, from wireframing and prototyping to visual design and development.
Strong understanding of user-centered design principles and methodologies.

          </p>
          <div className='flex mb-12 gap-x-6 lg:gap-x-10 '>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView?<CountUp start={1} end={2} duration={5}/>:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of<br/>
                 Experience</div>
            </div>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView?<CountUp start={1} end={15} duration={5}/>:null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects<br/>
                 Completed</div>
            </div>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView?<CountUp start={1} end={5} duration={5}/>:null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied<br/>
                 Clients</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <Link to="contact"><button className='btn btn-lg'>CONTACT ME</button></Link>
            <a href="home" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
