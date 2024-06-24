import React from 'react'
import Image from "next/image";
import { BentoGridThirdDemo } from './BentoGridThirdDemo';
import { NavbarDemo } from './NavbarDemo';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Social from './Social';

function page() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className=' bg-black'>
        <NavbarDemo/>
        <Home/>
        <About/>
        <Portfolio/> 
        <Experience/>                     
        <Social/>
    </div>
  )
}

export default page