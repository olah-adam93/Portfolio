import React from 'react';
import './Carousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import GitHubIcon from '@mui/icons-material/GitHub';

import meetforce1 from '../images/Meetforce/meetforce_01.jpg';
import meetforce2 from '../images/Meetforce/meetforce_02.jpg';
import meetforce3 from '../images/Meetforce/meetforce_03.jpg';
import meetforce4 from '../images/Meetforce/meetforce_04.jpg';
import meetforce5 from '../images/Meetforce/meetforce_05.jpg';

import tictactoe1 from '../images/TicTacToe/tictactoe_01.jpg';
import tictactoe2 from '../images/TicTacToe/tictactoe_02.jpg';
import tictactoe3 from '../images/TicTacToe/tictactoe_03.jpg';
import tictactoe4 from '../images/TicTacToe/tictactoe_04.jpg';
import tictactoe5 from '../images/TicTacToe/tictactoe_05.jpg';

import currency1 from '../images/Currency_exc/currency_01.jpg';
import currency2 from '../images/Currency_exc/currency_02.jpg';

const MyCarousel = () => {
  return (
    <div className='carousel-wrapper'>
      <div className='meetforce-div'>
        <h3 className='projects-h3'>Meetforce</h3>
        <Carousel showThumbs={false} showStatus={false}>
          <div className='carousel-img-container'>
            <img src={meetforce1} alt='image1' className='carousel-img' />
          </div>

          <div className='carousel-img-container'>
            <img src={meetforce2} alt='image2' className='carousel-img' />
          </div>

          <div className='carousel-img-container'>
            <img src={meetforce3} alt='image3' className='carousel-img' />
          </div>

          <div className='carousel-img-container'>
            <img src={meetforce4} alt='image4' className='carousel-img' />
          </div>

          <div className='carousel-img-container'>
            <img src={meetforce5} alt='image5' className='carousel-img' />
          </div>
        </Carousel>
        <div class='carousel-p-div'>
          <p className='carousel-p'>
            Meetforce is a global self-service ticketing platform for live experiences
            that allows anyone to create, share, find and attend events that fuel their
            passions and enrich their lives. From Kung-Fu presentation, marathons,
            conferences, community rallies, to gaming competitions and archery contest.
            Our mission is to bring the world together through live experiences.
          </p>
          <p className='carousel-p'>
            Technologies: ReactJS, JavaScript, Firebase (Auth, RTDB, Storage, Host), React
            ContextAPI, React-Router, SCSS, Client side rendering, GoogleMapsAPI
            ,StripeAPI
          </p>
        </div>
        <div>
          <button>
            <div className='carousel-btn-text'>
              <a href='https://meet-force.web.app/' target='_blank' rel='noreferrer'>
                Try Demo
              </a>
              <CallMissedOutgoingIcon className='icon' />
            </div>
          </button>

          <button>
            <div className='carousel-btn-text'>
              <a
                href='https://github.com/olah-adam93/MeetForce'
                target='_blank'
                rel='noreferrer'
              >
                View Code
              </a>
              <GitHubIcon className='icon' />
            </div>
          </button>
        </div>
        {/* begin */}
        <div className='tic-tac-toe-div'>
          <h3 className='projects-h3'>Tic-Tac-Toe</h3>
          <Carousel showThumbs={false} showStatus={false}>
            <div>
              <img src={tictactoe1} alt='image1' />
            </div>
            <div>
              <img src={tictactoe2} alt='image2' />
            </div>
            <div>
              <img src={tictactoe3} alt='image3' />
            </div>
            <div>
              <img src={tictactoe4} alt='image4' />
            </div>
            <div>
              <img src={tictactoe5} alt='image5' />
            </div>
          </Carousel>
          <div class='carousel-p-div'>
            <p className='carousel-p'>
              Tic tac toe is a multiplayer game and the players of this game have to
              position their marks(sign) so that they can construct a continuous line of
              three cells or boxes vertically, horizontally, or diagonally. An opponent
              can stop a win by blocking the end of the opponent's line. I created my own
              version of this game to make it more enjoyable, give it a try..!
            </p>
            <p className='carousel-p'>Technologies: HTML, CSS, JavaScript</p>
          </div>
          <div>
            <button>
              <div className='carousel-btn-text'>
                <a
                  href='https://tic-tac-toe-oa22.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Try Demo
                </a>
                <CallMissedOutgoingIcon className='icon' />
              </div>
            </button>
            <button>
              <div className='carousel-btn-text'>
                <a
                  href='https://github.com/olah-adam93/Tic-Tac-Toe'
                  target='_blank'
                  rel='noreferrer'
                >
                  View Code
                </a>
                <GitHubIcon className='icon' />
              </div>
            </button>
          </div>
        </div>

        {/* end */}

        <div className='currency-conv-div'>
          <h3 className='projects-h3'>Currency Converter</h3>
          <Carousel showThumbs={false} showStatus={false}>
            <div>
              <img src={currency1} alt='image1' />
            </div>
            <div>
              <img src={currency2} alt='image2' />
            </div>
          </Carousel>
          <div class='carousel-p-div'>
            <p className='carousel-p'>
              In this app, you can enter your amount and convert your currency to a
              different country's currency. You can also easily exchange or reverse the
              two countries' currency by clicking on the exchange icon.
            </p>
            <p className='carousel-p'>
              Technologies: HTML, CSS, Javascript, ExchangeRate-API
            </p>
          </div>
          <div>
            <button>
              <div className='carousel-btn-text'>
                <a
                  href='https://currency-conv-oa22.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Try Demo
                </a>
                <CallMissedOutgoingIcon className='icon' />
              </div>
            </button>
            <button>
              <div className='carousel-btn-text'>
                <a
                  href='https://github.com/olah-adam93/CurrencyConverter'
                  target='_blank'
                  rel='noreferrer'
                >
                  View Code
                </a>
                <GitHubIcon className='icon' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
