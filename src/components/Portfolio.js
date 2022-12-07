import React from 'react';
import Universe from '../images/Universe.jpg';
import Pw from '../images/pw.png';
import Kronos from '../images/kronos.png';
import Weather from '../images/weather.png';
import Workday from '../images/workday-scheduler.png';
import Note from '../images/note.png';
import Blog from '../images/blog-post.png';

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
        <img src={Pw} alt='alt' style={styles.image} />
        <p style={styles.text}>Password Generator</p>
        <a href='https://github.com/turtle2001/password-generator'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://turtle2001.github.io/password-generator/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>

      <div>
        <img src={Workday} alt='alt' style={styles.image} />
        <p style={styles.text}>Workday Scheduler</p>
        <a href='https://github.com/turtle2001/workday-scheduler'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://turtle2001.github.io/workday-scheduler/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>

      <div>
        <img src={Kronos} alt='alt' style={styles.image} />
        <p style={styles.text}>Kronos-StatIM</p>
        <a href='https://github.com/turtle2001/Kronos-StatIM'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://turtle2001.github.io/Kronos-StatIM/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>

      <div>
        <img src={Note} alt='alt' style={styles.image} />
        <p style={styles.text}>Note Taker</p>
        <a href='https://github.com/turtle2001/note-taker'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://note-taker-fbc.herokuapp.com/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>

      <div>
        <img src={Blog} alt='alt' style={styles.image} />
        <p style={styles.text}>Cameras Eat First</p>
        <a href='https://github.com/SkyWalkerMM26/Food-Blog-Post'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://cameraeatsfirst.herokuapp.com/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>

      <div>
        <img src={Weather} alt='alt' style={styles.image} />
        <p style={styles.text}>Weather Dashboard</p>
        <a href='https://github.com/turtle2001/weather-dashboard'>
          <p style={styles.text}>GitHub</p>
        </a>
        <a href='https://turtle2001.github.io/weather-dashboard/'>
          <p style={styles.text}>Deployed</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
