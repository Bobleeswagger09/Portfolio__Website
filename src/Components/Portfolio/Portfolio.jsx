import React from 'react';
import './Portfolio.css';
import IMG1 from '../../Assets/assets/portfolio1.jpg';
import IMG2 from '../../Assets/assets/portfolio2.jpg';
import IMG3 from '../../Assets/assets/portfolio3.jpg';
import IMG4 from '../../Assets/assets/portfolio4.jpg';
import IMG5 from '../../Assets/assets/portfolio5.png';
import IMG6 from '../../Assets/assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Photo Gallary Website',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Todo-list App',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Simple Weather website',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Landing Page',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Blog Website',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },

  {
    id: 6,
    image: IMG6,
    title: 'Netflix-clone Website',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porttfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_items-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
