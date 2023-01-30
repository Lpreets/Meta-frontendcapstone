import React from 'react'
import BookingForm from './BookingForm'

const BookingSlot = ({ availableTimes, submitForm }) => {
  return (
    <>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </>
  );
};

export default BookingSlot;