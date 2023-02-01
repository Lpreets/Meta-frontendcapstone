import React from 'react'
import JaneDoe from '../assets/testimonials/JaneDoe.jpg'
import JohnDoe from '../assets/testimonials/JohnDoe.jpg'
import RichardRoe from '../assets/testimonials/RichardRoe.jpg'

const Testimonials = () => {

  const testimonial = [
    { image: JaneDoe, name: "Jane Doe", score: "5/5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { image: RichardRoe, name: "Richard Roe", score: "4.5/5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { image: JohnDoe, name: "John Doe", score: "5/5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]

  return (
    <section className="Testimonials" id="Testimonials" alt="Testimonials">
       {testimonial.map((testimonial, index) => (
         <div key={index} className="Testimonial">
           <img src={testimonial.image} alt={testimonial.name} className="Testimonial-Img" />
           <h2>{testimonial.name}</h2>
           <p>{testimonial.score}</p>
           <p>{testimonial.description}</p>
         </div>
       ))}
    </section>
  );
};

export default Testimonials;
