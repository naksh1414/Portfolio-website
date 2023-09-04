import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="App bg-cyan h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    
      <motion.div 
      variants={fadeIn("down",0.3)}
      initial="hidden"
      whileInView={"show"}
      className="container h-[500px] w-[400px] lg:w-[500px] bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className='text-accent font-primary font-bold drop-shadow-sm text-2xl lg:text-4xl tracking-widest'>CONNECT WITH ME</div>
          <input type="text" placeholder='Enter Your name ' className='h-10 w-[300px] rounded-full px-4 r'/>
          <input type="email" placeholder='Enter your Email' className='h-10 w-[300px] rounded-full px-4 p'/>
          <input type="text" placeholder='Query' className='h-10 w-[300px] rounded-full px-4 p' />
          <button className='cursor-pointer btn btn-sm rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '>SUBMIT</button>
        </form>
      </motion.div>
  
  </div>
  </section>
  )
};

export default Contact;
