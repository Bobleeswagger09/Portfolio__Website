import React from 'react';
import './Footer.css';
import { footerSocials } from '../../Assets/assets/data';

const Footer = () => {
  return (
    <section id="Footer">
      <footer>
        <a href="#" className="footer__logo">Edidiong Victor Samuel</a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          {footerSocials.map(({ id, link, icon })=>{
              return (
                <a href={link} target="_blank" key={id}>{icon}</a>
              )
          })}
        </div>

        <div className="footer__copyright">
          <small>&copy; VICTOR SAMUEL. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
