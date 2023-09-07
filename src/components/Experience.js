import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';


const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);

  return (
  <li 
  ref={ref} 
  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
  >
    <LiIcon reference={ref} />
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration: 0.5, type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
          <a className='text-primary dark:text-primaryDark capitalize cursor-pointer'>
            @{company}
          </a> 
      </h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll (
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  
  return (
    <div className='my-64 '>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px] ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
              <Details
                position= "FrontEnd Developer"
                company= "CoverApp Digital"
                time= "2020-2022"
                address= "Kyrenia, North Cyprus"
                work="Developing innovative web and mobile applications.
                Maintenance and further development of existing application.
                Design and development of database models.
                Converting Figm Designs to a Fully Responsive Website.
                Optimization of backend processes and database queries."
              />
              
              <Details
                position= "Web Designer"
                company= "First World Co Ltd."
                time= "2017-2019"
                address= "Lagos State, Nigeria"
                work="Planning, creation, and maintenance of websites, online portals, and
                  internet presences.
                  Development of the layout (colors, images, graphics, animations ).
                  HTML/CSS programming.
                  Upload and manage files and website content.
                  Website publishing, hosting, and domain management.
                  Newsletter - creation.
                  Corporate Design.
                  Help with marketing."
              />
              <Details
                position= "IT Support"
                company= "Dangote Flour Mill."
                time= "2015-2017"
                address= "CrossRiver State, Nigeria"
                work="Responding to customer inquiries and providing technical support via phone, email, or chat.
                Troubleshooting and diagnosing technical issues, and providing solutions in a timely manner.
                Escalating more complex issues to 2nd or 3rd-level support.
                Maintaining records of customer interactions and keeping track of technical issues and resolutions.
                Collaborating with other team members to improve support processes and knowledge base articles."
              />
            </ul>

      </div>
    </div>
  )
}

export default Experience