
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import '@/styles/components/footer.scss';
const Footer = () => {
  const handleLinkedinClick= ()=>{

    window.open('https://www.linkedin.com/in/nhlamulomagwaza/');
  }


  const handleGitHubClick= ()=>{

    window.open('https://github.com/nhlamulomagwaza');
  }
  return (
<>

<footer className="footer">

    <div className="footer-content">


        <div className="footer-copyright">copyright &copy; Nhlamulo Magwaza</div>

        <div className="footer-contact-details">
          <div className="phone"><IoMdPhonePortrait size={25}/>0810524169</div>
          <div className="mail"><MdOutlineEmail size={25} />dev@nhlamulomagwaza.co.za</div>
        </div>
      
        <div className="footer-social-details">
<FaLinkedin size={25} onClick={handleLinkedinClick} style={{cursor:'pointer'}} className='social-icons'/>
<FaGithub size={25} onClick={handleGitHubClick} style={{cursor:'pointer'}} className='social-icons'/>
        </div>
    </div>
</footer>

</>
  )
}

export default Footer