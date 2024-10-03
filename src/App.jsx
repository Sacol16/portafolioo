import React from 'react';
import Navigation from "./Components/Navbar";
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import SocialMedia from './Components/SocialMedia';
import "./App.css";


const App = () => {
  return (
    <div className='body'>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <SocialMedia />
    </div>
  );
};

export default App;
