import React from 'react';
import { motion } from 'framer-motion';



const Skill = ({name, x,y}) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6  shadow-dark
    cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' 
    whileHover={{scale:1.05}}
    initial= {{x:0, y:0}}
    whileInView ={{x:x, y:y, transition: {duration:1.5} }}
    viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl w-full text-center mt-64 text-dark dark:text-light md:text-6xl md:mt-32'>Skills</h2>  
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
        md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
          
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-6 shadow-dark
        cursor-pointer lg:p-6 md:p-4 xs:p-2 xs:text-xs ' 
        whileHover={{scale:1.05}}
        >
          Web
        </motion.div>

        <Skill name="HTML5" x="-22vw" y="-2vw" />
        <Skill name="CSS3" x="-5vw" y="-8vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="-15vw" />
        <Skill name="NextJS" x="20vw" y="-12vw" />
        <Skill name="Web Design" x="35vw" y="-5vw" />
        <Skill name="NodeJS" x="0vw" y="-21vw" />
        <Skill name="ViteJS" x="18vw" y="18vw" />
        <Skill name="Mongo DB" x="-20vw" y="18vw" />
        <Skill name="Prisma" x="-36vw" y="2vw" />

      </div>

    </>
  )
}

export default Skills