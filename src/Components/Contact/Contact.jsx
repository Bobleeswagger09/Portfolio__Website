import React,  {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {contact} from "../../Assets/assets/data"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_scyo14a',
      'template_xz7216j',
      form.current,
      'S9L_DuZHb-3MMAddi'
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>et in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contact.map(({id, icon, name, contactInfo, link })=>{

          
            return (
              
              <article className="contact__option" key={id}>
                {icon}
                <h4>{name}</h4>
                <h5>{contactInfo}</h5>
                <a href={link} target="_blank" rel="noreferrer noopenner">
                  Send a Message
                </a>
              </article>    
            )
          })}
        </div>

        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="example@mail.com"
						required
					/>
					<textarea
						name="message"
						placeholder="your message"
						rows="7"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


