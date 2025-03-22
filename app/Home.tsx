import React from 'react'
import { FlipWords } from '@/components/ui/flip-words'
import { BackgroundBeams } from '@/components/ui/background-beam';
import Image from 'next/image';
import Img from './Profile.png';

function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className='h-[100vh] sm:flex items-center md:mt-0 mt-44  '>
      <div className="text flex flex-grow">
        <div className='flex items-center justify-end  gap-16 w-full m-5 md:m-0'>
          <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            I'M <span className='text-5xl text-white'>OUYORNG KHEANG </span> <br />
            4<sup>th</sup> year software engineering student
          </div>
        </div>
      </div>
      <div className="img text-white flex flex-grow ">
        <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="black" />

          <image href="/Home/ORNG.png" x="50" y="50" width="400" height="400" preserveAspectRatio="xMidYMid slice" />

          <rect x="20" y="20" width="80" height="10" fill="white" />
          <rect x="20" y="20" width="10" height="80" fill="white" />

          <rect x="400" y="470" width="80" height="10" fill="white" />
          <rect x="470" y="400" width="10" height="80" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default Home