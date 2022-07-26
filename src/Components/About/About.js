import React from 'react';
import './About.css';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FlightIcon from '@mui/icons-material/Flight';
import MovieIcon from '@mui/icons-material/Movie';

const About = (props) => {
  return (
    <div id={props.id}>
      <h1>About Me</h1>
      <div className='about-text'>
        <p className='about-p'>
          Hello! I'm Adam Olah, a full-stack developer based in Budapest. Most recently, I
          spent 5 years working in different quality engineering roles. Then end of last
          year, I realized that I lost my motivation in this area and will deal with what
          I've always been interested in, "coding". I enrolled in a Front-end developer
          program at Progmatic Academy-Budapest, and I can say it's been the best decision
          I've made. I look forward to new challenges and getting the chance to build new
          things daily.
        </p>
        <p className='about-p skills'>
          <strong>Technologies I've Worked With:</strong> JavaScript, ReactJS, HTML5, CSS,
          NodeJS, Express, MongoDB, Bootstrap, Git, Github.
        </p>
      </div>

      <h3 className='hobbies-h3'>Hobbies</h3>
      <div className='hobbies-div'>
        <div className='hobbies-container'>
          <SportsSoccerIcon className='icon-hb' />
          <AutoStoriesIcon Icon className='icon-hb' />
          <DirectionsBikeIcon className='icon-hb' />
          <SportsEsportsIcon className='icon-hb' />
          <MovieIcon className='icon-hb' />
          <FlightIcon className='icon-hb' />
        </div>
      </div>
    </div>
  );
};

export default About;
