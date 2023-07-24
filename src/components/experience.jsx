// import React from 'react'
// import JobList from './jobList'
// import "../style/experience.css";

// function experience() {
//   return (
//     <div id="experience">
//         {/* <FadeInSection> */}
//           <div className="section-header ">
//             <span className="section-title">/ experience</span>
//           </div>
//           <JobList/>
//         {/* </FadeInSection> */}
//       </div>
   
//   )
// }

// export default experience

import React from 'react';
import JobList from './jobList';
import "../style/experience.css";

function Experience() {
  return (
    
    <div id="experience">
      {/* <FadeInSection> */}
      <div className="section-header">
        <span className="section-title">/ experience</span>
      </div>
      <JobList />
      {/* </FadeInSection> */}
    </div>
    
  );
}

export default Experience;
