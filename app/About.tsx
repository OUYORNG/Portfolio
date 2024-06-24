import React from 'react'
import { FlipWords } from '@/components/ui/flip-words'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { title } from 'process'

function About() {
    const words = ['About','SKills']
    const projects = [
        {
            title: "HTML CSS",
            description:
              "Intermediate",
            link: "",
          },
          {
            title: "JAVASCRIPT",
            description:
              "Intermediate",
            link: "",
          },
          {
            title: "JAVA",
            description:
              "Intermediate",
            link: "",
          },
          {
            title: "C & C++",
            description:
              "Moderate",
            link: "",
          },
          {
            title: "Git",
            description:
              "Daily uses",
            link: "",
          },
          {
            title: "Linux Experiences",
            description:
              "Ubuntu user",
            link: "",
          },
    ]
  return (
    <div className='h-[100vh]'
    >
       <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400
       md:pt-10 pl-10 pr-10 
       ">
            <FlipWords words={words} />
            <p className='
            pl-7 pr-7 pt-7 text-[20px]
            '>
            A very curious and passionate to learn new things with flexible and easy-going personality. I have a strong commitment to learn multiple programming languages and tools. I would prefer my leisure time to keep up with the upcomming technology and improves my skills.
            </p>
          </div> 
          <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
    </div>

    </div>
  )
}

export default About