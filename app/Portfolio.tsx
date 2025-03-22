import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Img from './image.png'
import POS from './POS.png'
import Image from "next/image";
import Booking from './Booking.jpg'

const ProjectData = [
  {
    title: "TechBox Project",
    description: "AI-powered career-matching platform for high school students exploring technology careers",
    ImageLink: "/HomeImage/TB.png",
    DemoLink: "https://techbox.site/",
    Button: "Try now"
  },
  {
    title: "E Commerce Project",
    description: "An ecommerce project with all basics function and Bakong KHQR Integrated",
    ImageLink: "/HomeImage/Ecommerce.png",
    DemoLink: "https://ecommerce.gic25.site/",
    Button: "Try now"
  },
  {
    title: "Mock Exam System",
    description: "The platform aim to help highschool student to be preapred and learn for entrance exam",
    ImageLink: "/HomeImage/MES.png",
    DemoLink: "http://mockexam.pages.dev/",
    Button: "Try now"
  },
  {
    title: "Chinese school website",
    description: "Showing the school information to provide easy access for students",
    ImageLink: "/HomeImage/LT.png",
    DemoLink: "https://liantian.pages.dev/",
    Button: "Try now"
  },
  {
    title: "Flutter Project MES",
    description: "MES Platform for mobile app with RestAPIs",
    ImageLink: "/HomeImage/MESMB.png",
    DemoLink: "https://www.figma.com/proto/wMYJjsmQ8x8H3lZiW4SaHt/Mock-Exam-2.O---Mobile?node-id=1-2&t=8MxWhXlOvKJZD1tz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    Button: "Try now"
  },

]

function Card3D(props: any) {
  return <>

    <CardContainer className="inter-var p-2 md:p-0">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.ImageLink}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={props?.DemoLink || ''}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Demo →
          </CardItem>
          <a href={props.DemoLink}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {props.Button}
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  </>
}

function createCard(props: any) {
  return <Card3D title={props.title} description={props.description} ImageLink={props.ImageLink} DemoLink={props.DemoLink} Button={props.Button} />
}
function Portfolio() {
  return (
    <section id='portfolio' className=' mt-[850px] md:mt-0'>
      <div className='
        text-5xl text-white
        flex justify-center pt-12
        '>Portfolio</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {ProjectData.map(createCard)}
      </div>
    </section>
  )
}

export default Portfolio