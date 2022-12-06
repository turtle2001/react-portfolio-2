import React from 'react';

const styles = {
  navbar: {
    background: 'red',
    display: 'flex',
    position: 'fixed-bottom',
  },
  link: {
    margin: '10px',
    color: 'blue',
  },
};

function Footer() {
  return (
    <nav style={styles.navbar}>
      <a
        href='https://www.linkedin.com/in/alexis-zaragoza-5baa51242/'
        style={styles.link}
      >
        LinkedIn
      </a>
      <a href='https://github.com/turtle2001' style={styles.link}>
        GithHub
      </a>
    </nav>
  );
}

export default Footer;
