'use client';


import '@/styles/components/navbar.scss'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineGrain } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu]= useState(false);
  return (
<>

<nav className="desktop-navbar">
      <div className="logo">
        <h1><FaLaptopCode size={33}/></h1>
      </div>

    <ul className="desktop-menu-items">

      <li className='desktop-menu-option'><a href="#" className='desktop-menu-item'>
        <IoHomeOutline/><p id='desktop-menu-item'>Home</p></a></li>

    
        <li className='desktop-menu-option'><a href="#about" className='desktop-menu-item'>
        <IoPersonOutline/><p id='desktop-menu-item'>About</p></a></li>

        <li className='desktop-menu-option'><a href="#skills" className='desktop-menu-item'>
        <MdOutlineGrain/><p id='desktop-menu-item'>Skills</p></a></li>
        <li className='desktop-menu-option'><a href="#works" className='desktop-menu-item'>
        <GoPackage/><p id='desktop-menu-item'>Works</p></a></li>
        <li className='desktop-menu-option'><a href="#contact" className='desktop-menu-item'>
        <MdOutlineLocalPhone/><p id='desktop-menu-item'>Contact</p></a></li>
        <li style={{cursor:'pointer'}} className='desktop-menu-option mobile-menu-btn-open'  onClick={()=> setShowMobileMenu(true)}><a  className='desktop-menu-item'
       >
        <IoMdMenu size={30}/></a></li>
 
    </ul>
</nav>

<nav className={showMobileMenu? 'show-mobile-menu': 'mobile-menu'}>


  <ul className="mobile-menu-items">
  <li onClick={()=> setShowMobileMenu(false)} className='mobile-menu-option' style={{cursor:"pointer"}}><a className='mobile-menu-item' >
  <IoMdClose size={30} /></a></li>
  <li className='mobile-menu-option'><a href="#" className='mobile-menu-item'>
        <IoHomeOutline/><p id='desktop-menu-item'>Home</p></a></li>

    
        <li className='mobile-menu-option'><a href="#about" className='mobile-menu-item'>
        <IoPersonOutline/><p id='mobile-menu-item'>About</p></a></li>

        <li className='mobile-menu-option'><a href="#skills" className='mobile-menu-item'>
        <MdOutlineGrain/><p id='mobile-menu-item'>Skills</p></a></li>
        <li className='mobile-menu-option'><a href="#works" className='mobile-menu-item'>
        <GoPackage/><p id='mobile-menu-item'>Works</p></a></li>
        <li className='mobile-menu-option'><a href="#contact" className='mobile-menu-item'>
        <MdOutlineLocalPhone/><p id='mobile-menu-item'>Contact</p></a></li>
       

  </ul>
</nav>


</>
  )
}

export default Navbar