/* eslint-disable react/no-unescaped-entities */
'use client';

import { GiGraduateCap } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import '@/styles/components/about.scss';
import Image from 'next/image';
import { FaFingerprint } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import React from "react";
const About = () => {
  return (
    <>
    <section className="about" id='about'>

           <div className="section-titles">About</div>
                          

                          <div className="about-titles">

                          <h1 className="about-background-title">Background</h1>
                          <h1 className="about-experience-title">Work History</h1>
                          </div>

           <div className="about-content">



            <div className="about-background">
            <h1 className="about-background-title-mobile">Background</h1>

               
               <p className="about-background-description">

Thanks for visiting my website. 
Fully committed to the philosophy of life-long learning,
 I'm a web developer based in South Africa. As you might guess, I'm passionate
 about tech and coding, I've been programming since my highschool years. I have experience in building backend and frontend logic for
 sites and applications. 
            
               </p>
               <p className="about-background-description">

When I'm not coding, I hop on netflix and watch something like Vikings or The Blacklist. If not that then I read some news to catch-up on the latest
shifts in the world. When I'm really bored, you will find me playing some piano. I like this instrument, messing with its keys once in a while is a relaxing pratice. Overall, I'm
a creative person who likes to solve complex things and connect with people. Cheers!
            
               </p>

               <div className="about-background-education">
             

               <div className="about-background-education-details">
               <GiBookshelf className='education-icon'  size={100} />
               <div className="education-details-wrapper">
              <h1 className="about-school-name">Nyukani Education Centre</h1>
              <p className="about-qualification-name">HighSchool/Matric</p>
              </div>

               
               </div>
               <div className="about-background-education-details">
               <GiGraduateCap className='education-icon'  size={100} />


                     <div className="education-details-wrapper">
              <h1 className="about-school-name">Rosebank College</h1>
              <p className="about-qualification-name">Software Development</p>
              </div>

               
               </div>


               </div>
            </div>


            <div className="about-experience">
            <h1 className="about-experience-title-mobile">Work History</h1>
  <div className="experience-card">
    <div className="experience-header">
  <div className="company-profile">
   
     <FaFingerprint size={30} color="lime"/>
     </div>

     <div className="experience-details">

      <div className="role-title">Web Developer</div>
      <div className="companyname-date">We Print Now | Jan 2020-2022</div>
     </div>
     </div>
      <div className="role-description">Building responsive websites for clients using various tools such as Html, CSS, JavaScript and wordpress. Sites ranged from
        blog, ecommerce and enterprise websites.
      </div>

  </div>
  <div className="experience-card">
    <div className="experience-header">
  <div className="company-profile">
  <BsFillPeopleFill size={30} color="aqua"/>
     
     </div>

     <div className="experience-details">

      <div className="role-title">Web Developer</div>
      <div className="companyname-date">NineFive Recruitment | Jan 2023-2024</div>
     </div>
     </div>
      <div className="role-description">Building fullstack applications, managing interactive frontend UIs using React and Next.js. Integrating with backend APIs and services to fetch and manipulate data. Participating in client meetings to gather requirements, provide updates,and address feedback.</div>

  </div>
 


            </div>
           </div>

    </section>
    
    
    
    </>
  )
}

export default About