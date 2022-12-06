import React from 'react';
import Portrait from '../images/placeholder.png';

function AboutMe() {
  return (
    <section>
      <h2 className='AboutMe'>About Me</h2>
      <img className='portrait' src={Portrait} alt='portrait of me'></img>
      <p>About me text.</p>
    </section>
  );
}

export default AboutMe;
