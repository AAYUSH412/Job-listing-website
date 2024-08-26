import React from 'react';
import './index.css' // Ensure you have the correct path to your CSS file
import Navbar from './components/navbar';
import Hero from './components/hero';
import Homecards from './components/homecards';
import Joblist from './components/joblist';
import Viewalljobs from './components/viewalljobs';



const App = () => {
  return (  
    <>
    <Navbar />
    <Hero/>
    <Homecards/>
    <Joblist/>
    <Viewalljobs/>
    </>
  );
};

export default App;
