import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BookingForm = ({ availableTimes, submitForm }) => {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(2);
  const [occassion, setOccassion] = useState("none");

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      date: date.toISOString().slice(0,10),
      time: time,
      guests: guests,
      occassion: occassion
    }
    submitForm(reservation);
  }

  return (
    <form onSubmit={handleSubmit} className="Form">
        <h1>Book a table</h1>
        <div className="Form-Tables">
            <label htmlFor="Date">Date</label>
            <input type="date" name="date" value={date.toISOString().slice(0,10)} onChange={handleDateChange} required />
        </div>
        <div className="Form-Tables">
            <label htmlFor="time">Time</label>
            <select name="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                {
                  availableTimes && availableTimes.times
                  ? availableTimes.times.map((time, index) => {
                      return <option value={time} key={index}>{ time }</option>
                  })
                  : null
                }
            </select>
        </div>
        <div className="Form-Tables">
            <label htmlFor="guests">Guests</label>
            <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </div>
        <div className="Form-Tables">
            <label htmlFor="occassion">Occassion</label>
            <select name="occassion" value={occassion} onChange={(e) => setOccassion(e.target.value)} >
                <option value="none">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
        </div>
        <Link to="ConfirmedBooking" alt="Booking confirmed">
          <input type="submit" value="Confirm Table" className="Booking-Button" />
        </Link>
    </form>
  )
}

export default BookingForm;
