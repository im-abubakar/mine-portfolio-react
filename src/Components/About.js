import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Abubaker</b> and I am from Sargodha, Pakistan.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BS in IT</b>. <br /><br />
            I have completed an internship at <b>NADRA Regional Head Office </b> Sargodha, where I gained hands-on experience in technical support and system administration. Additionally, I worked as a Junior Web Developer at <b> Web Development Cell (WDC) </b>, University of Sargodha, contributing to fintech solutions and refining my JavaScript and MERN stack skills.
            I love creating original projects with beautiful designs—check out some of my work in the Projects section!
            <br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            {/* Apart from coding I love to do photography, you can check out some of my shots here <a href="" target='_blank'>Instagram.</a> */}
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Python' />

      </div>
    </>
  )
}

export default About