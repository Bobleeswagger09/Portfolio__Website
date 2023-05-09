import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Experience from './Experience/Experience';
import Services from './Services/services';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      

    </>
  );
};
export default App;
