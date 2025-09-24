import React, { Suspense } from 'react'
import Nav from './sections/Nav';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Nav />
      <Main />
      <About />
      <Projects/>
      <Experiences/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    
    
   
  )
};



export default App;
