import React from 'react';
import './Footer.css';
import { FaFacebookMessenger } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';

const Footer = () => {
  return (
    <section id="Footer">
      <footer>
        <a href="#" className="footer__logo"></a>

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
          <a href="https://messanger.com">
            <FaFacebookMessenger />
          </a>
          <a href="https://instagram.com">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com">
            <CiTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; VICTOR SAMUEL. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
