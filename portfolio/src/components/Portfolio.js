import React from 'react';
import Universe from '../images/Universe.jpg';
import Card from '../images/placeholder.png';

const styles = {
  page: {
    background: `url(${Universe})`,
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    display: 'flex-around',
  },
  image: {
    margin: '10px',
    width: '300px',
    height: '300px',
  },
  text: {
    color: 'white',
  },
};

function Portfolio() {
  return (
    <section style={styles.page}>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
      <div>
        <a href='https://github.com/'>
          <img src={Card} alt='alt' style={styles.image} />
          <p style={styles.text}>Title here</p>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
