import React from 'react';
import JobList from './jobList';
import "../style/experience.css";

function Experience() {
  return (
    
    <div id="experience"> 
      <div className="section-header">
        <span className="section-title">/ experience</span>
      </div>
      <JobList />
    </div>
    
  );
}

export default Experience;
