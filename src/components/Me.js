import React from 'react';
import Portrait from '../images/placeholder.png';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={Portrait} alt='portrait of me'></img>
      <p>About me text.</p>
    </section>
  );
}

export default AboutMe;
