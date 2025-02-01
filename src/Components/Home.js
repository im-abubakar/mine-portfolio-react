import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import Contactus from './Contactus.js';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Abubaker</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of transforming a raw idea into a website or product that makes an impact.
            I aim to work on projects that challenge me as a developer and allow me to build something I can truly be proud of.<br /><br />
            I am fluent in <b>C++</b> and know a bit of <b>Python</b>  My primary focus is on the <b> MERN</b> stack, and I'm actively working on projects using it.
            For my Final Year Project, I am developing an AR-powered store application using <b>Next.js</b>,<b> Three.js</b> and <b>Augmented Reality (AR)</b> to enhance the shopping experience.
            Looking ahead, I plan to move towards Hybrid Development, expanding my skills in <b> React Native </b> and cross-platform technologies. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>

      <div className="contactuss">
        <Contactus />
      </div>
    </div>
  )
}

export default Home