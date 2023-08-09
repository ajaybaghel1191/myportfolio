
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
const About = () => {
  const {ref}= useSectionInView('About');
  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
   <SectionHeading>About me</SectionHeading>
   <p className='mb-3'>
   During college, I successfully earned a degree in{" "} <span className='font-bold'>Civil Engineering</span> from the esteemed <span className='font-bold'>National Institute of Technology, Kurukshetra, India</span>. Following my graduation, I made the resolute 
   decision to channel my fervor for programming. This prompted me to enroll in a comprehensive coding bootcamp, where I honed my skills in <span className='font-bold'>full-stack web development</span> and delved deep into 
   <span className='font-bold'> {" "}Data Structures and Algorithms</span>.
   </p>
   <p>
   The realm of programming that I find most enthralling is <span className='font-bold'>problem-solving</span>. The process of deciphering intricate issues and arriving at solutions fills me with an immense sense of accomplishment.
   </p>
   <p>
   My foundational skill set encompasses <span className='font-bold'>React, Next.js, Node.js, and MongoDB</span>. I'm also well-acquainted with TypeScript and Prisma. My eagerness to embrace and master emerging technologies is unyielding. In my current phase, I am actively in pursuit of a rewarding <span className='font-bold'>full-time role as a software developer</span>.
   </p>
   <p>
   Beyond the confines of coding, I find delight in activities such as  <span className='font-bold'>watching movies and playing basketball</span> . My penchant for perpetual learning fuels my exploration of diverse subjects including history, philosophy, scientific phenomena, and global affairs.
   </p>
  </motion.section>
  )
}

export default About