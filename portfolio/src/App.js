import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Me from './components/Me';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  function renderPage() {
    if (currentPage === 'about') return <Me></Me>;
    if (currentPage === 'portfolio') return <Portfolio></Portfolio>;
    if (currentPage === 'contact') return <Contact></Contact>;
    if (currentPage === 'resume') return <Resume></Resume>;
  }

  return (
    <div>
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navbar>
      {renderPage()}

      <Footer></Footer>
    </div>
  );
}

export default App;
