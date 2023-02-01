import React from 'react';
import restaurantfood from '../assets/about/restauranfood.jpg'
import restaurantchef from '../assets/about/restaurantchef.jpg'

const About = () => {
    return (
        <section className="About" id="About" alt="About us">
            <div className='Grid-About'>
                <img src={restaurantfood} className="About-Img" alt="Restaurant food" />
                <h1>Who are we?</h1>
                <img src={restaurantchef} className="About-Img" alt="Restaurant chef" />
            </div>
            <article className="About-Summary">
                <h2>We are</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
        </section>
    );
};

export default About;