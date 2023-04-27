import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../Assets/assets/me_02.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hello I'm</h5>
        <h1>Victor Samuel</h1>
        <h4 className="text-light">
          <Typewriter
            options={{
              strings: [
                'React Developer 😎',
                'Currrently learning The MERN Stack  🔥',
                'Life Hack: Learn More, Fear Less',
                'The World is your Oyster 🥰',
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2800,
            }}
          />
        </h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scrool Down
        </a>
      </div>
    </header>
  );
};

export default Header;
