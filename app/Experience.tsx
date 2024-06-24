import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from "next/image";
import POS from './POS.png'
import Teaching from './Teaching.png'
import { Highlight } from '@/components/ui/hero-highlight';

function Experience() {
    const contents = [
        {
          title: "Booking Systems",
          description:
            'Practice project with using NextJS and NestJS and conduct designing with Figma',
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              <Highlight className="text-black dark:text-white">
              February 2024 - Presents
        </Highlight>
            </div>
          ),
        },
        {
          title: "Point of Sales Systems",
          description:
            'Develop backend with Java OOP and implement with Workbench and customize UI with Netbeans',
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Highlight className="text-black dark:text-white">
              November 2023-December 2023
        </Highlight>
            </div>
          ),
        },
        {
          title: "Volunteered Teaching C++",
          description:
            "Teach junoir on basic of C++ programming ( Datatype, Loop, Arrays,...) along with basic of Networking and Computer Components",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              <Highlight className="text-black dark:text-white">
              October 2023-December 2023
        </Highlight>
            </div>
          ),
        },
        {
            title: "Scoring operator",
            description:
              "Scores operator via website systems. Setup networking and power for operations Config, setup equiqments to operate Result announcer and Pole matching",
            content: (
              <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <Highlight className="text-black dark:text-white">
                12 July 2023-7 September 2023
        </Highlight>
              </div>
            ),
          },
          {
            title: "Organizers Debate Competition",
            description:
              "Judges and Mentoring Created and analysis debate topics Making criteria, ruleset and agenda making Assign task and role for participate teams",
            content: (
              <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <Highlight className="text-black dark:text-white">
                January 2021-March 2021
        </Highlight>
              </div>
            ),
          },
        {
          title: "  ",
          description:
            "",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
            </div>
          ),
        },
      ];
  return (
    <div className='
    h-[100vh]  overflow-hidden
    '>
      <div className='
        text-5xl text-white
        flex justify-center pt-12
        '>Experiences</div>
    <div className="p-10 overflow-hidden">
      <StickyScroll content={contents} />
    </div>
    </div>
  )
}

export default Experience