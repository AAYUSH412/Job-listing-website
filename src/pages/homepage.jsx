import React from 'react'
import Hero from '../components/hero'
import HomeCards from '../components/homecards'
import JobList from '../components/joblist'
import Viewalljobs from '../components/viewalljobs'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobList isHome={true}/>
      <Viewalljobs/>
    </div>
  );
};

export default Homepage;