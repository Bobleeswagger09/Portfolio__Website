import React from 'react';
import './Experience.css';
import { frontendExperience } from "../../Assets/assets/data";
import { backendExperience } from "../../Assets/assets/data";
import {  BsFillPatchCheckFill} from 'react-icons/bs';



const Experience = () => {
  return (
    <section id="experience">
      <h5>Tech Stack</h5>
      <h2>Experience</h2>
      <div className="container experience__container">        
        {/* Frontend Experience */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperience.map(({ id, title, level }) => {
              return (                              
                <article className="experience__details" key={id}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              )
            })}
            
          </div>
        </div>
      

        {/* Backend skills */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experienced__content">
            {backendExperience.map(({id, title, level}) =>{
              return (
                <article className="experience__details" key={id}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              )
              
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
