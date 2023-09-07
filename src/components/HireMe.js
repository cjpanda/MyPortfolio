import React from 'react'
import { FullstackIcon } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex justify-center items-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <FullstackIcon className={"fill-dark animate-spin-slow  dark:fill-light"}/>

        <Link href="https://www.fiverr.com/cjpandadev" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:text-dark text-light
        shadow-md border border-solid border-dark  w-20 h-20 rounded-full font-semibold hover:bg-purple-900 hover:border-none hover:dark:bg-purple-900 hover:dark:text-light  md:w-12 md:h-12 md:text-[10px]'
        target={'_blank'}>Hire Me</Link>
      </div>
    </div>
  )
}

export default HireMe