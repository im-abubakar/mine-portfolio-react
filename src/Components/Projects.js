import React from 'react';
import ProjectBox from './ProjectBox';
import OneezPartyImage from '../images/OneezPartyImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import BloodImage from '../images/BloodImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={BloodImage} projectName="Blood Donation" />
        <ProjectBox projectPhoto={OneezPartyImage} projectName="EzParty" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects