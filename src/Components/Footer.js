import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Abubaker</h4>
      <h4>Copyright &copy; 2024 Bakar</h4>
      <div className='footerLinks'>
        <a href="https://github.com/im-abubakar" target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abubaker-mughal-2820bb292/" target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href="mailto:bakarbro123@gmail.com" target='_blank' rel='noopener noreferrer'>
          <GrMail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
