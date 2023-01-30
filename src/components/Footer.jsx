import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="Footer" id="Footer" alt="Footer">
      <ul>
        <li>
          <Link to="/" className="Footer-Links" alt="Link to Homepage">
            Home
          </Link>
        </li>
        <li>
          <a href="#Specials" className="Footer-Links" alt="Link to Specials">
            Specials
          </a>
        </li>
        <li>
          <a href="#BookingPage" className="Footer-Links" alt="Link to Booking Table">
            Book Table
          </a>
        </li>
        <li>
          <a href="#Testimonials" className="Footer-Links" alt="Link to Testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#About" className="Footer-Links" alt="Link to About us">
            About Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer