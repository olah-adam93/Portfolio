import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className='nav-content'>
        <div>
          <button className='logo' onClick={scrollToTop}>
            AO
          </button>
        </div>
        <div>
          <ul className='nav-items'>
            <li className='nav-item one'>
              <Link
                activeClass='active'
                to='welcome'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item two'>
              <Link
                activeClass='active'
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className='nav-item three'>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item four'>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
