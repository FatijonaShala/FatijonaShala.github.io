import React from 'react'
import "../style/projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";


const spotlightProjects = {
  "Eurollogaria": {
    title: "Eurollogaria",
    desc:
      "An accounting firm website created for Eurollogaria, using react.",
    techStack: "REACTJS",
    link: "https://github.com/FatijonaShala/eurollogaria",
    image: "/assets/eurollogaria.png"
  },
  
  "Dolist": {
    title: "dolist",
    desc:
      "A web application for managing tasks.Features including: register/login, create to do lists, pomodoro timer for tasks, dark mode, etc.",
    techStack: "REACT.JS, NODE.JS, MONGODB",
    link: "https://github.com/FatijonaShala/dolist-frontend",
    image: "/assets/dolist.png"
  },

  "Asteroid Tracker": {
    desc:
      "Website that uses NASA'S data to track and list the Near Earth Objects (NEOs) - also called asteroids which will be having their closest approach to Earth on selected date. ",
    techStack: "REACT.JS",
    link: "https://github.com/FatijonaShala/Asteroid-Tracker",
    
  }
 
};
const projects = {

  "Dolist": {
    desc:
      "A web application for managing tasks.Features including: register/login, create to do lists, pomodoro timer for tasks, dark mode, etc.",
    techStack: "REACT.JS, NODE.JS, MONGODB",
    link: "https://github.com/FatijonaShala/dolist-frontend",
    open: ""
  },
  
  "Asteroid Tracker": {
    desc:
      "Website that uses NASA'S data to track and list the Near Earth Objects (NEOs) - also called asteroids which will be having their closest approach to Earth on selected date. ",
    techStack: "REACT.JS",
    link: "https://github.com/FatijonaShala/Asteroid-Tracker",
    open: ""
  },

  "Rezervo": {
    desc:
      "Make online reservations, read restaurant reviews from diners. When you have an unexpected plan, this application will be a great support for people who want to dine somewhere excellent.",
    techStack: "PHP, Bootstrap, JavaScript, HTML, CSS",
    link: "https://github.com/FatijonaShala/rezervo",
    open: ""
  }
};

function projektet() {
  return (
    <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]} </p>
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  /////////////
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              // <FadeInSection delay={`${i + 1}00ms`}>
                <li key={i} className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
              
                 </li> 
                //  </FadeInSection>  
            ))}
          </ul>
        </div>
      </div>
  )
}

export default projektet;