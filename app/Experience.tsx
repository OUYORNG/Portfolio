import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from "next/image";
import POS from './POS.png'
import Teaching from './Teaching.png'
import { Highlight } from '@/components/ui/hero-highlight';

function Experience() {
  const contents = [
    {
      title: "Project Lead in MockExam System",
      description: (
        <ol>
          <li>
            - Systems analysis for scalability and reliable across different browsers and devices
          </li>
          <li>
            - Lead junior students to develop frontend with NextJS
          </li>
          <li>
            - Develop a microservices architecture with NestJS
          </li>
          <li>
            - Applying SCRUM methodology
          </li>
          <li>
            - Linux Server Deployment (CI/CD) and load balancing
          </li>
          <li>
            - Create a work plan, coding workspace and team management
          </li>
        </ol>
      ),
      intistite: 'Institute of Technology of Cambodia',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Highlight className="text-black dark:text-white">
            Oct 2024 - Presents
          </Highlight>
        </div>
      ),
    },
    {
      title: "Web Developer at Kradass",
      description: (
        <ol>
          <li>
            - Developing a services using Sveltkit
          </li>
          <li>
            - Developing GraphQL APIs using NestJS
          </li>
          <li>
            - Integrate ThreeJS with Svelte Kit
          </li>
        </ol>
      ),
      intistite: 'Institute of Technology of Cambodia',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Highlight className="text-black dark:text-white">
          Dec 2024 -  Feb 2025
          </Highlight>
        </div>
      ),
    },
    {
      title: "Co-Founder & Product Lead",
      description: (
        <ol>
          <li>
            - Developed TechBox, an AI-powered career-matching platform for high school students exploring technology careers
          </li>
          <li>
            - Conducted market research, user interviews, and business model development for scalability
          </li>
        </ol>
      ),
      intistite: 'CAMTECH UNIVERSITY (INNOVATIVE TECH CHALLENGE)',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Highlight className="text-black dark:text-white">
          Dec 2024 -  Feb 2025
          </Highlight>
        </div>
      ),
    },
    {
      title: "Team Lead in Social Development Project",
      description: (
        <ol>
          <li>
            - Frontend developer with fragments and framework
          </li>
          <li>
            - Backend developer with Liferay, a CMS tools using swagger and GraphQL
          </li>
          <li>
            - Create work plan and analyze the project requirements
          </li>
        </ol>
      ),
      intistite: 'Glean Asia (INTERNSHIP)',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Highlight className="text-black dark:text-white">
          Dec 2024 -  Feb 2025
          </Highlight>
        </div>
      ),
    },
    {
      title: "",
      description:
        "",
      intistite: '',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <section id='experience' className='
    h-[100vh]  overflow-hidden
    '>
      <div className='
        text-5xl text-white
        flex justify-center pt-12
        '>Experiences</div>
      <div className="p-10 overflow-hidden">
        <StickyScroll content={contents} />
      </div>
    </section>
  )
}

export default Experience