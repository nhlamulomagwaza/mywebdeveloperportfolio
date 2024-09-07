import React, { useEffect } from 'react';
import '@/styles/components/works.scss'
import abstergoMain from '@/assets/portfolio/abstergo/abstergo-main.png';
import abstergoOne from '@/assets/portfolio/abstergo/abstergo-one.png';
import abstergoTwo from '@/assets/portfolio/abstergo/abstergo-two.png';
import ninefiveone from '@/assets/portfolio/ninefiverecruitment/ninefive-one.png';
import ninefivetwo from '@/assets/portfolio/ninefiverecruitment/ninefive-two.png';
import ninefiveMain from '@/assets/portfolio/ninefiverecruitment/ninefive-main.png';
import germanjobsMain from '@/assets/portfolio/germanjobs/gemanjobs-main.png';
import germanjobsone from '@/assets/portfolio/germanjobs/germanjobs-one.png';
import germanjobstwo from '@/assets/portfolio/germanjobs/germanjobs-two.png';
import heirwolfcinemaMain from '@/assets/portfolio/heirwolfcinema/heirwolfcinema.png';
import heirwofcinemaone from '@/assets/portfolio/heirwolfcinema/heirwolfcinema-one.png';
import heirwolfcinematwo from '@/assets/portfolio/heirwolfcinema/heirwolfcinema-two.png';
import compliancecheckpointMain from '@/assets/portfolio/compliancecheckpoint/compliancecheckpoint-main.png';
import compliancecheckpointone from '@/assets/portfolio/compliancecheckpoint/compliancecheckpoint-one.png';
import compliancecheckpointtwo from '@/assets/portfolio/compliancecheckpoint/compliancecheckpoint-two.png';

import soundbarMain from '@/assets/portfolio/soundbar/soundbar-main.png';
import soundbarone from '@/assets/portfolio/soundbar/soundbar-one.png';
import soundbartwo from '@/assets/portfolio/soundbar/soundbar-two.png';
import Image from 'next/image';

const Works = ({hideModal, setHideModal, setSelectedWork}) => {

  const onSelectWork = (work) => {
    setSelectedWork(work);
    setHideModal(true);
  };


  const works=[
    {
      id: 0,   
      title:'Abstergo',
      summary:' A full-stack Kanban web application designed for efficient task management and workflow organization. It features real-time updates, CRUD functionality, and seamless integration between front-end and back-end components.',
      imagemain: abstergoMain,
      imageone: abstergoOne,
      imagetwo: abstergoTwo,
      techStack:['html', 'react', 'typescript', 'css', 'node js', 'mongodb'],
      livesite:'https://abstergo.onrender.com/',
      github: 'https://github.com/nhlamulomagwaza/abstergo',

    },
    {
      id: 1,   
      title:'NineFive Recruitment',
      summary:'A recruitment agency website with features for resume uploads, candidate profiles, and a job portal. It combines front-end and back-end components to streamline recruitment and enhance user interaction.',
      imagemain: ninefiveMain,
      imageone:ninefiveone,
      imagetwo:ninefivetwo,
      techStack:['html', 'sass', 'javascript', 'react', 'node js', 'mongodb'],
      livesite:'https://ninefiverecruitment.onrender.com/',
      github:'https://github.com/nhlamulomagwaza/ninefiverecruitment'

    },
    {
      id: 2,   
      title:'German Jobs Portal',
      summary:'A specialized portal showcasing job opportunities across Germany, designed to connect job seekers with potential employers. It offers an intuitive interface and comprehensive search features for a streamlined job search experience.',
      imagemain: germanjobsMain,
      imageone:germanjobsone,
      imagetwo:germanjobstwo,
      techStack:["html", "sass", "react", "javascript"],
      livesite:'https://germanjobportal.netlify.app/',
      github:'https://github.com/nhlamulomagwaza/germanjobsportal'

    },
    {
      id: 3,   
      title:'Heirwolf Cinema',
      summary:'A web application similar to Netflix that fetches and displays movie and TV show lists from a playlist. Users can search for content, browse through genres, and bookmark their favorite movies for easy access.',
      imagemain: heirwolfcinemaMain,
      imageone: heirwofcinemaone,
      imagetwo:heirwolfcinematwo,
      techStack:["html", "sass", "react", "javascript"],
      livesite:'https://heirwolf-cinema.netlify.app/',
      github:'https://github.com/nhlamulomagwaza/heirwolfcinema'

    },
    {
      id: 4,   
      title:'Compliance Checkpoint',
      summary:'A professional website for a legal compliance company, offering resources and information on regulatory adherence. It features a clean design and user-friendly navigation to support clients in meeting legal requirements.',
      imagemain: compliancecheckpointMain,
      imageone:compliancecheckpointone,
      imagetwo:compliancecheckpointtwo,
      techStack:["html", "css", "javascript"],
      livesite:'https://compliancecheckpointgroup.co.za/',
      github:null

    }
    ,
    {
      id: 5,   
      title:'Soundbar',
      summary:'An e-commerce site dedicated to selling high-quality audio equipment, featuring a sleek design and user-friendly shopping experience. It includes product listings, detailed descriptions, and an efficient checkout process.',
      imagemain: soundbarMain,
      imageone:soundbarone,
      imagetwo:soundbartwo,
      techStack: ['wordpress'],
      livesite:'https://nhlamulomagwaza.co.za/soundbar/',
      github:null,

    }
    
  ]

  return (
   <>
   
   <section className="works" id='works'>

    <div className="works-section-titles">


        Recent Works
    </div>

<div className="works-content">
{works.map((work) => (
<div key={work.id} className="work-card" 
onClick={() => onSelectWork(work)}
  >

<Image src={work?.imagemain} alt=" " className='work-image' />
<div className="work-title">{work.title}</div>
<div className="work-summary">
  {work.summary}
    </div>
   
</div>))}


</div>
    
   </section>
    
   </>
  )
}

export default Works