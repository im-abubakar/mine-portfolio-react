import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    InventoryDesc: "A MERN-based inventory management system with JWT authentication. Features efficient product management and seamless deployment, hosted on Netlify for easiness.",
    InventoryGithub: "https://github.com/im-abubakar/Inventory-management-system",
    InventoryWebsite: "inventory-managment-sys.netlify.app/",

    EzPartyDesc: "A platform for booking top event services in your city. Connects users with trusted local vendors to plan perfect weddings, parties, and events effortlessly.",
    EzPartyGithub: "",
    EzPartyWebsite: "https://oneezparty.com/",

    OneupDesc: "An AI-powered platform offering customized investment solutions. Ensures control, and smarter financial management for users seeking seamless, tailored investment opportunities.",
    OneupGithub: "",
    OneupWebsite: "https://oneuppp.netlify.app",
  };

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']}>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']}>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox