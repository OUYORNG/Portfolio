import React from 'react'
import { FlipWords } from '@/components/ui/flip-words'
import { BackgroundBeams } from '@/components/ui/background-beam';
import Image from 'next/image';

function Home() {
    const words = ["better", "cute", "beautiful", "modern"];
  return (
    // <div>
    //   <BackgroundBeams/>
    //   <div className='flex items-end
    //       h-[100vh] '>
    //       <div className='flex items-center justify-end  gap-16 w-full'>
    //         <div className='flex-grow flex mb-22 ml-16'>
    //             <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
    //             I'M <span className='text-5xl text-white'>OUYORNG KHEANG </span> <br/>
    //             A Third year software developer student.
    //             </div>
    //         </div>
    //       </div>
            // <img className=' w-[500px] flex items-end z-40 justify-center
            // rounded-xl
            // ' src="/Profile.png" alt="" />
    //   </div>
    // </div>
    <div className='h-[100vh] sm:flex items-center md:mt-0 mt-44 '>
      <div className="text flex flex-grow">
      <div className='flex items-center justify-end  gap-16 w-full m-5 md:m-0'>
                  <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                  I'M <span className='text-5xl text-white'>OUYORNG KHEANG </span> <br/>
                  A Third year software developer student.
                  </div>
                </div>
      </div>
      <div className="img text-white flex flex-grow ">
          <div>
              <Image
                src='/Profile.JPG'
                height="500"
                width="500"
                className=" w-[500px] flex items-end z-40 justify-center"
                alt="thumbnail"
              />
          </div>
      </div>
    </div>
  )
}

export default Home