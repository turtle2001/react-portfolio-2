import React from 'react';
import Portrait from '../images/me.jpg';

const styles = {
  image: {
    width: '300px',
    height: '200px',
  },
};

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={Portrait} style={styles.image} alt='portrait of me'></img>
      <p>Aspiring web designer</p>
    </section>
  );
}

export default AboutMe;
