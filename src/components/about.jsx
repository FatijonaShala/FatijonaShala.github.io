import React from 'react';
import "../style/about.css";

const currentWork = (
  <p>
    I am currently a <b>freelance web developer. </b>
    At the same time, I am learning and practicing my skills.
  </p>
);

const interests = (
  <p>
    Outside of work, I'm interested in following the developments of
    science. I also read books and play cozy video games. 
  </p>
);

const techStack = [
  "React.js",
  "Javascript ES6+", 
  "Node.js",
  "HTML & CSS",
  "GIT",
  "Windows & Linux"
];

function About() {
  return (
    <div id="about">
      <div className="section-header">
        <span className="section-title">/ about me</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          {currentWork}
          <p>Here are some technologies I have been working with:</p>
          <ul className="tech-stack">
            {techStack.map((tech_item, i) => (
              <li key={i}>{tech_item}</li>
            ))}
          </ul>
          {interests}
        </div>
        <div className="about-image">
          {/* <img src={"/assets/"} /> */}
        </div>
      </div>
      
    </div>
  );
}

export default About;
