"use client";
import '@/styles/components/hero.scss';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiRead } from "react-icons/ci";
import { ReactTyped } from "react-typed";
import React from 'react';
//I specialize in web & mobile development and this is my little corner on the internet where I showcase what I can do
const Hero = () => {
  return (
    <>
    <section className="hero">



<div className="hero-showcase">


<p className="hero-greeting">   <ReactTyped strings={["Hello, I am"]} typeSpeed={70} loop backDelay={3000} backSpeed={100}/></p>
<h1 className="hero-title">Nhlamulo Magwaza</h1>
<p className="hero-occupation">  I specialize in web development and this is my little corner on the internet where I showcase what I can do
</p>

</div>
 <div className="hero-cta">
   
 <a href="#about" className='hero-explore'><CiRead/><div className="hero-btn-text">Explore</div></a>
 
   
   <a href='https://nhlamulomagwaza.co.za/Nhlamulo%20Magwaza%20Web%20Developer.pdf' target='_blank' className="hero-explore"><IoCloudDownloadOutline /><div className="hero-btn-text">Resume</div></a>
   </div>


    </section>
    </>
  )
}

export default Hero