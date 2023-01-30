import React from 'react';
import BookingSlot from './BookingSlot';

const Booking = ({ availableTimes, submitForm }) => {

  return (
    <section className="BookingPage" id="BookingPage" alt="Book Table">
      <BookingSlot availableTimes={availableTimes} submitForm={submitForm} />
    </section>
  );
};

export default Booking;