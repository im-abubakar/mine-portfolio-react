import React from 'react';
import ProjectBox from './ProjectBox';
import OneezPartyImage from '../images/OneezPartyImage.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
import InventoryImage from '../images/inventory.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={InventoryImage} projectName="Inventory" />
        <ProjectBox projectPhoto={OneezPartyImage} projectName="EzParty" />
        {/* <ProjectBox projectPhoto={InventoryImage} projectName="Inventory Management System" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects