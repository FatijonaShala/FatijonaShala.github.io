import React from 'react'
import { Sidenav } from "rsuite";
import "../style/sidebarNav.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";


function sidebarNav() {
  // const { expanded } = this.state;

  const links = [
    <a href="#intro">/home</a>,
    <a href="#about">/about</a>,
    <a href="#experience">/experience</a>,
    <a href="#projects">/software-creations</a>
  ];
  return (
    <div className='sidebar-nav'>

          <Sidenav
            // expanded={expanded}
            // defaultOpenKeys={["3", "4"]}
            // activeKey={this.state.activeKey}
            // onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  // <FadeInSection delay={`${i + 1}00ms`}>
                    <div key={i}>{link}</div>
                  // </FadeInSection>
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