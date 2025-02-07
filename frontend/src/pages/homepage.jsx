import React from 'react';
import Hero from '../components/hero';
import HomeCards from '../components/homecards';
import JobList from '../components/joblist';
import Viewalljobs from '../components/viewalljobs';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4">
          <HomeCards />
          <JobList isHome={true} />
          <Viewalljobs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;