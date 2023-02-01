import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-icons/Logo.svg';

const Footer = () => {
  return (
    <footer className="Footer" id="Footer" alt="Footer">
      <img src={Logo} alt="Little Lemon logo" />
      <ul className="Footer-Ul"> Navigation
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
      <ul className="Footer-Ul"> Contact
        <li>Adress: Lorem ipsum dolor sit amet</li>
        <li>Email: Lorem ipsum dolor sit amet</li>
        <li>Phone: Lorem ipsum dolor sit amet</li>
      </ul>
    </footer>
  );
};

export default Footer