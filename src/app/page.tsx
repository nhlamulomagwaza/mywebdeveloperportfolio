'use client'
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/Footer";
import Works from "@/components/works/Works";
import Modal from "@/components/portfoliomodals/Modal";
import Snowfall from 'react-snowfall'
import '@/styles/components/snow.scss';
import Loading from "@/components/loading/Loading";
import React from "react";
import { Slide } from "react-awesome-reveal";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
 
  const [loading, setLoading] = React.useState(true);
  const [selectedWork, setSelectedWork]= React.useState(null);
  const [hideModal, setHideModal] = React.useState(false);
  
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust the timeout to your liking
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
 <>
 <Toaster/>
 <div className="snow"><Snowfall snowflakeCount={30} speed={[2,2]} radius={[2, 2]} /></div>,
 <Slide direction="down" duration={2000} triggerOnce fraction={0}>
 <Hero/>
 </Slide>
 <Slide direction="up" duration={2000} triggerOnce fraction={0}>
 <About/>
 </Slide>
 <Slide direction="up" duration={2000} triggerOnce fraction={0}>
 <Skills/>
 </Slide>
 <Slide direction="right" duration={2000} triggerOnce fraction={0}>
 <Works hideModal={hideModal} setHideModal={setHideModal} setSelectedWork= {setSelectedWork}/>
 </Slide>
 <Slide direction="left" duration={2000} triggerOnce fraction={0}>
 <Contact/>
 </Slide>
 <Footer/>
 <Modal work={selectedWork} hideModal={hideModal} setHideModal={setHideModal} /> 
 </>
  );
}
