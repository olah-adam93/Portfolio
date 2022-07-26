import React from 'react';
import image from './linkedinPhoto.jpg';
import Typed from 'react-typed';
import './Welcome.css';

const Welcome = (props) => {
  return (
    <div id={props.id} className='fullpage'>
      <div className='welcome-container'>
        <section className='welcome-image'>
          <img src={image} alt='linkedinPhoto' className='linkedinPhoto' />
        </section>

        <section className='welcome-text'>
          <div className='text-div'>
            <h2>Welcome! My name is</h2>
            <h1 className='welcome-h1'>Adam Olah</h1>
            <h2>
              <span>I'm a </span>
              <h3 class='welcome-h3'>
                <Typed strings={[`Front-end`, 'Web', `Software`]} typeSpeed={120} loop />
              </h3>
              <p>developer</p>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
