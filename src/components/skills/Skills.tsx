import '@/styles/components/skills.scss';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
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
import { FaJava } from "react-icons/fa";


const Skills = () => {
  return (
 <>
 <section className="skills" id='skills'>


 <div className="section-titles">Skills</div>


 <div className="skills-content">


  <a href='https://html.com/' target='_blank' className="skills-box">

  <FaHtml5 color='#F59A19' size={80} />
  <p className="skill-text">HTML5</p>
  </a>
  <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className="skills-box">

  <FaCss3Alt color='#907AD1' size={80} />
  <p className="skill-text">CSS3</p>
  </a>
  <a href='https://sass-lang.com/' target='_blank' className="skills-box">

  <FaSass color='#FF0FA7' size={80} />
  <p className="skill-text">SASS</p>
  </a>
  <a href='https://tailwindcss.com/' target='_blank' className="skills-box">

  <RiTailwindCssFill color='aqua' size={80} />
  <p className="skill-text">TAILWIND</p>
  </a>

  <a href='https://www.javascript.com/' target='_blank' className="skills-box">

  <SiJavascript color='#FFD43B' size={80} />
  <p className="skill-text">JAVASCRIPT</p>
  </a>
  <a href='https://www.typescriptlang.org/' target='_blank' className="skills-box">

  <SiTypescript color='white' size={80} />
  <p className="skill-text">TYPESCRIPT</p>
  </a>
  <a href='https://react.dev/' target='_blank' className="skills-box">

  <FaReact color='#74C0FC' size={80} />
  <p className="skill-text">REACT</p>
  </a>
  <a href='https://www.java.com/en/' target='_blank' className="skills-box">

  <FaJava color='pink' size={80} />
  <p className="skill-text">JAVA</p>
  </a>
  <a href='https://nextjs.org/' target='_blank' className="skills-box">

  <SiNextdotjs color='white' size={80} />
  <p className="skill-text">NEXT JS</p>
  </a>
  <a href='https://nodejs.org/en' target='_blank' className="skills-box">

  <FaNode color='#51F415' size={80} />
  <p className="skill-text">NODE JS</p>
  </a>
  <a href='https://expressjs.com/' target='_blank' className="skills-box">

  <SiExpress color='skyblue' size={80} />
  <p className="skill-text">EXPRESS JS</p>
  </a>
  <a href='https://www.php.net/' target='_blank' className="skills-box">

  <SiPhp color='red' size={80} />
  <p className="skill-text">PHP</p>
  </a>
  <a href='https://wordpress.com/' target='_blank' className="skills-box">

  <FaWordpress color='aqua' size={80} />
  <p className="skill-text">WORDPRESS</p>
  </a>
  <a href='https://www.mongodb.com/' target='_blank' className="skills-box">

  <SiMongodb color='#6CAC48' size={80} />
  <p className="skill-text">MONGO DB</p>
  </a>
  <a href='https://aws.amazon.com/what-is/sql/' target='_blank' className="skills-box">

  <SiMysql color='white' size={80} />
  <p className="skill-text">SQL</p>
  </a>

  <a href='https://en.wikipedia.org/wiki/Amazon_Web_Services' target='_blank' className="skills-box">

  <FaAws color='orange' size={80} />
  <p className="skill-text">AWS</p>
  </a>
  <a href='https://en.wikipedia.org/wiki/DevOps' target='_blank' className="skills-box">

  <FaHeadSideVirus color='pink' size={80} />
  <p className="skill-text">DEV OPS</p>
  </a>
  <a href='https://git-scm.com/' target='_blank' className="skills-box">

  <FaGitAlt color='red' size={80} />
  <p className="skill-text">GIT</p>
  </a>
  <a href='https://code.visualstudio.com/' target='_blank' className="skills-box">

  <VscVscode color='papayawhip' size={80} />
  <p className="skill-text">VS CODE</p>
  </a>
 </div>
 </section>
 
 </>
  )
}

export default Skills