import React from 'react'
import MandA from '../assets/hero/MandA.jpg'

const Hero = () => {
  return (
    <section className="Hero" id="Hero" alt="Hero section with button to book table">
      <div className="Grid-Hero">
        <hero>
          <h1>Little Lemon</h1>
          <h2>Chigaco</h2>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>
            <a href="#BookingPage" className="Hero-Button-Link">
              Book Table
            </a>
          </button>
        </hero>
        <hero>
          <img src={MandA} className="Hero-Img" alt="Mario and Adrian, chefs"/>
        </hero>
      </div>
    </section>
  );
};

export default Hero