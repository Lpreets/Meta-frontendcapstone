import React from 'react'
import bruchetta from '../assets/specials/bruchetta.svg'
import greeksalad from '../assets/specials/greeksalad.jpg'
import lemondessert from '../assets/specials/lemondessert.jpg'

const Specials = () => {

  const Special = [
    { image: bruchetta, name: "Bruchetta", price: "2.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { image: lemondessert, name: "Lemon cake", price: "3.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { image: greeksalad, name: "Greek salad", price: "4.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]

  return (
    <section className="Specials" id="Specials" alt="Little Lemon specials">
       {Special.map((special, index) => (
         <div key={index} className="Special">
           <img src={special.image} alt={special.name} className="Special-Img" />
           <h2>{special.name}</h2>
           <p>{special.price}</p>
           <p>{special.description}</p>
         </div>
        ))}
    </section>
  );
};

export default Specials
