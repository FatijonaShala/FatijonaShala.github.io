import React from 'react'
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import "../style/intro.css";
import TypingAnimation from './TypingAnimation';

function intro() {
  return (
    <div id="intro">
         
           <TypingAnimation/> 
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
          
          I am a software engineer based in Kosovo, with a specialization in React and some experience in dabbling with Node.js. My main focus is on full-stack development, particularly in creating dynamic web applications with React. Additionally, I am interested in exploring the potential of AI, which further fuels my passion for technology.
          </div>
          <a
            href="mailto:fatjonaash1@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon> </EmailRoundedIcon>
              {"  " + "Say hi!"} 
            
          </a>
    </div>
  )
}

export default intro;