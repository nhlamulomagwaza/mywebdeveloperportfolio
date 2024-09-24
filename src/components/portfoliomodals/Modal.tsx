'use client';

import '../../styles/components/modal.scss';
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image';


import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNodedotjs } from "react-icons/si";

import { SiNextdotjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiReactos } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {  FaReact } from "react-icons/fa";

import study from '@/assets/study.jpg';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

interface Work {
  title: string;
  imagemain: string;
  // Add other properties as needed
}

interface ModalProps {
  hideModal: boolean;
  setHideModal: React.Dispatch<React.SetStateAction<boolean>>;
  work?: Work; // Make work optional
}

const Modal: React.FC<ModalProps> = ({ hideModal, setHideModal, work }) => {
if (!work) return null; // Add this line to check if work is null or undefined
  

const getTechIcon = (tech: string) => {
  switch (tech) {
    case "html":
      return <FaHtml5 size={30} color='#F59A19'/>;
    case "css":
      return <FaCss3Alt size={30} color='#907AD1' />;
    case "sass":
      return <FaSass size={30} color='#FF0FA7'/>;
    case "tailwind":
      return <RiTailwindCssFill size={30} color='aqua' />;
    case "javascript":
      return <SiJavascript size={30} color='#FFD43B'/>;
    case "typescript":
      return <SiTypescript size={30} color='white' />;
    case "node js":
      return <SiNodedotjs size={30} color='#51F415'/>;
    case "next js":
      return <SiNextdotjs size={30} />;
    case "expresss":
      return <SiExpress size={30} />;
    case "php":
      return <SiPhp size={30} />;
    case "react native":
      return <SiReactos size={30} />;
    case "wordpress":
      return <FaWordpress size={30} color='aqua' />;
    case "mongodb":
      return <SiMongodb size={30} color='#6CAC48' />;
    case "mysql":
      return <SiMysql size={30} />;
    case "react":
      return <FaReact size={30} color='#74C0FC' />;
    default:
      return null;
  }
};

  return (
    <section className={hideModal ? 'modal' : 'modal-hidden'}>
      <div className={hideModal ? 'modal-content' : 'modal-content-hidden'}>
        <div className="close-modal">
          <IoMdClose size={25} className='close-modal-icon' onClick={() => setHideModal(!hideModal)}/>
        </div>
        <div className="modal-content-details">
          <div className="modal-content-header">
          <div className="modal-work-title" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>

  {window.innerWidth > 900 && work?.title.length > 12 ? work?.title.slice(0, 12) + '...' : work?.title}
</div>
          <div className="modal-cta">
            <button className="modal-cta-btn" ><FaEye size={15}  /> <a className="livesite-text" onClick={()=>{
                 alert('due to the site being hosted on a shared cloud platform, there will be a slight minute delay on load time. Other than that everything will continue as normal😁')

            }} href={work?.livesite} target='_blank'>view live site</a></button>
            {work?.github == null? null: <button className="modal-cta-btn"><FaGithub size={15}  /> <a className="livesite-text" href={work?.github} target='_blank'>github code</a></button>}
          </div></div>
        
        <div className="modal-content-body">
          <div className="modal-work-description">
            {work?.summary}
                     </div>
                     <div className="work-tech-stack">
            {work?.techStack?.map((tech) => (
              <div key={tech} className="tech-icon">
                {getTechIcon(tech)}
              </div>
            ))}
          </div>
        </div>
        <div className="modal-content-footer">
          {work?.imagemain && <Image alt=' ' src={work?.imagemain} className='img-placeholder' />}
          {work?.imagemain && <Image alt=' ' src={work?.imageone} className='img-placeholder'/>}
          {work?.imagemain && <Image alt=' ' src={work?.imagetwo} className='img-placeholder'/>}
         
        </div>
      </div>
      </div>
    </section>
  );
};

export default Modal;