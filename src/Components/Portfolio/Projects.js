import React from 'react';
import MyCarousel from './Carousel/Carousel';
import './Projects.css';

const Projects = (props) => {
  return (
    <div id={props.id} className='portfolio-container'>
      <h1>Portfolio</h1>
      <section className='projects-container'>
        <MyCarousel />
      </section>
    </div>
  );
};

export default Projects;
