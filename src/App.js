import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Portfolio from './Components/Portfolio/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <Welcome title='Welcome' subtitle='Welcome' id='welcome' />

        <Portfolio title='Portfolio' subtitle='Portfolio' id='portfolio' />

        <About title='About' subtitle='About' id='about' className='fullpage' />

        <Contact title='Contact' subtitle='Contact' id='contact' />
      </div>
      <footer>© 2022 Adam Olah. Thank you for visiting!</footer>
    </div>
  );
}

export default App;
