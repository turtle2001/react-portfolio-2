import React from 'react';

const styles = {
  navbar: {
    background: 'blue',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  page: {
    margin: '15px',
  },
};

function Navbar({ setCurrentPage, currentPage }) {
  return (
    <nav style={styles.navbar}>
      <a
        style={currentPage == 'about' ? styles.page : null}
        onClick={() => {
          setCurrentPage('about');
        }}
      >
        About Me
      </a>
      <a
        href='#'
        style={currentPage == 'portfolio' ? styles.page : null}
        onClick={() => {
          setCurrentPage('portfolio');
        }}
      >
        Portfolio
      </a>
      <a
        href='#'
        style={currentPage == 'contact' ? styles.page : null}
        onClick={() => {
          setCurrentPage('contact');
        }}
      >
        Contact
      </a>
      <a
        href='#'
        style={currentPage == 'resume' ? styles.page : null}
        onClick={() => {
          setCurrentPage('resume');
        }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
