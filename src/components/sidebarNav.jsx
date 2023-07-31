import React from 'react'
import { Sidenav } from "rsuite";
import "../style/sidebarNav.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";


function sidebarNav() {

  const links = [
    <a href="#intro">/home</a>,
    <a href="#about">/about</a>,
    <a href="#experience">/experience</a>,
    <a href="#projects">/projects</a>
  ];
  return (
    <div className='sidebar-nav'>

          <Sidenav
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div key={i}>{link}</div>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        

        <div className="sidebar-logos" href="/">
          <a href="mailto:fatjonaash1@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/FatijonaShala">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/fatijona-shala/">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
  )
}

export default sidebarNav