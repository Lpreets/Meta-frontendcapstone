import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../assets/logo-icons/HomeLogo.svg';
import Logo from '../assets/logo-icons/Logo.svg';
import DishIcon from '../assets/logo-icons/DishIcon.svg';

const Nav = () => {

  return (
        <nav>
            <ul>
              <img src={Logo} alt="Little Lemon logo" />
              <li>
                <Link to="/" className="Nav-Links" alt="Link to homepage">
                  <img src={HomeLogo} alt="Home Logo"/>
                  Home
                </Link>
              </li>
              <li>
                <a href="#Specials" className="Nav-Links" alt="Link to specials">
                  <img src={DishIcon} alt="Dish Logo"/>
                  Specials
                </a>
              </li>
              <li>
                <a href="#BookingPage" className="Nav-Links" alt="Link to book a table">
                  Book Table
                </a>
              </li>
              <li>
                <a href="#Testimonials" className="Nav-Links" alt="Link to testimonials">
                  Testiomonials
                </a>
              </li>
              <li>
                <a href="#About" className="Nav-Links" alt="Link to about us">
                  About Us
                </a>
              </li>
            </ul>
        </nav>
    );
};

export default Nav;