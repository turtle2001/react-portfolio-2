import React from 'react';
import resume from '../images/resume.pdf';

function Resume() {
  return (
    <div>
      <h2>My Resume</h2>
      <a href={resume}>Click here for resume</a>
    </div>
  );
}

export default Resume;
