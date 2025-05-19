import React from 'react';
import ProjectBox from './ProjectBox';
import OneezPartyImage from '../images/OneezPartyImage.png';
import OneupImage from '../images/Oneup.png' 
import FypImage from '../images/Fyp.png';
import KhataImage from '../images/Khata_app.png';
import ecommerceImage from '../images/ecommerce.png';
import annonymousImage from '../images/annonymous.png';
import InventoryImage from '../images/inventory.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={InventoryImage} projectName="Point Of Sale" />
        <ProjectBox projectPhoto={OneezPartyImage} projectName="EzParty" />
        <ProjectBox projectPhoto={OneupImage} projectName="Oneup" />
        <ProjectBox projectPhoto={FypImage} projectName="AR Furniture Web App " />
        <ProjectBox projectPhoto={KhataImage} projectName="Digital Khata" />
        <ProjectBox projectPhoto={ecommerceImage} projectName="Ecommerce Store " />
        <ProjectBox projectPhoto={annonymousImage} projectName="Anonymous Message Sender " />
      
      </div>

    </div>
  )
}

export default Projects