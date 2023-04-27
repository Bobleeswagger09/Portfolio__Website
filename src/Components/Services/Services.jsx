import React from 'react';
import './Services.css';
import { webDev, UserInterface, non_technical } from '../../Assets/assets/data';
import { BsCheck } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>what I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            {UserInterface.map(({ id, service }) => {
              return (
                <li key={id}>
                  <BsCheck className="sevice_list-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </article>

        {/* End of UX Design */}
        <article className="services">
          <div className="services_head">
            <h3>Web Developments</h3>
          </div>

          <ul className="service_list">
            {webDev.map(({ id, service }) => {
              return (
                <li key={id}>
                  <BsCheck className="sevice_list-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </article>

        {/* End of Web Developments */}
        <article className="services">
          <div className="services_head">
            <h3>Non Technical Skills</h3>
          </div>

          <ul className="service_list">
            {non_technical.map(({ id, service }) => {
              return (
                <li key={id}>
                  <BsCheck className="sevice_list-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
