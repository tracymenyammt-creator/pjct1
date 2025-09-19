import React, { Suspense } from 'react'
import Nav from './sections/Nav';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Nav />
      <Main />
      <About />
      <Projects/>
    </div>
    
    
   
  )
};



export default App;
