import React from 'react'
import Hero from './Hero'
import Specials from './Specials'
import BookingPage from './BookingPage'
import Testimonials from './Testimonials'
import About from './About'

const Home = () => {
  return (
    <div className="Home" id="Home">
      <Hero />
      <Specials />
      <BookingPage />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;